const express = require('express');
const router = express.Router();
const Score = require('../models/Score');
const { protect, requireSubscription } = require('../middleware/auth');

// Helper: normalize date to YYYY-MM-DD string for comparison
const normalizeDate = (d) => new Date(d).toISOString().split('T')[0];

// @GET /api/scores/my
router.get('/my', protect, requireSubscription, async (req, res) => {
  try {
    let scoreDoc = await Score.findOne({ user: req.user._id });
    if (!scoreDoc) {
      scoreDoc = await Score.create({ user: req.user._id, scores: [] });
    }
    const sorted = scoreDoc.getSortedScores();
    res.json({ success: true, scores: sorted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @POST /api/scores/add
router.post('/add', protect, requireSubscription, async (req, res) => {
  try {
    const { score, date } = req.body;

    if (!score || score < 1 || score > 45) {
      return res.status(400).json({ success: false, message: 'Score must be between 1 and 45' });
    }
    if (!date) {
      return res.status(400).json({ success: false, message: 'Date is required' });
    }

    let scoreDoc = await Score.findOne({ user: req.user._id });
    if (!scoreDoc) {
      scoreDoc = new Score({ user: req.user._id, scores: [] });
    }

    // FIXED: Duplicate date check (PRD requirement)
    const incomingDate = normalizeDate(date);
    const duplicate = scoreDoc.scores.find(s => normalizeDate(s.date) === incomingDate);
    if (duplicate) {
      return res.status(400).json({
        success: false,
        message: 'A score already exists for this date. Please edit or delete the existing entry.'
      });
    }

    scoreDoc.addScore(Number(score), new Date(date));
    await scoreDoc.save();

    const sorted = scoreDoc.getSortedScores();
    res.json({ success: true, message: 'Score added', scores: sorted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @PUT /api/scores/:scoreId
router.put('/:scoreId', protect, requireSubscription, async (req, res) => {
  try {
    const { score, date } = req.body;
    const scoreDoc = await Score.findOne({ user: req.user._id });

    if (!scoreDoc) {
      return res.status(404).json({ success: false, message: 'Score record not found' });
    }

    const entry = scoreDoc.scores.id(req.params.scoreId);
    if (!entry) {
      return res.status(404).json({ success: false, message: 'Score entry not found' });
    }

    // FIXED: Duplicate date check on edit (skip self)
    if (date) {
      const incomingDate = normalizeDate(date);
      const duplicate = scoreDoc.scores.find(
        s => s._id.toString() !== req.params.scoreId && normalizeDate(s.date) === incomingDate
      );
      if (duplicate) {
        return res.status(400).json({
          success: false,
          message: 'Another score already exists for this date.'
        });
      }
      entry.date = new Date(date);
    }

    if (score !== undefined) {
      if (score < 1 || score > 45) {
        return res.status(400).json({ success: false, message: 'Score must be between 1 and 45' });
      }
      entry.score = Number(score);
    }

    scoreDoc.updatedAt = new Date();
    await scoreDoc.save();

    const sorted = scoreDoc.getSortedScores();
    res.json({ success: true, message: 'Score updated', scores: sorted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// @DELETE /api/scores/:scoreId
router.delete('/:scoreId', protect, requireSubscription, async (req, res) => {
  try {
    const scoreDoc = await Score.findOne({ user: req.user._id });
    if (!scoreDoc) return res.status(404).json({ success: false, message: 'Not found' });

    scoreDoc.scores.pull(req.params.scoreId);
    await scoreDoc.save();

    const sorted = scoreDoc.getSortedScores();
    res.json({ success: true, message: 'Score deleted', scores: sorted });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
