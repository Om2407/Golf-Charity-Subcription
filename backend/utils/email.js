const nodemailer = require('nodemailer');

const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

const APP_NAME = 'GolfGives';
const FROM = `"${APP_NAME}" <${process.env.EMAIL_USER}>`;

exports.sendWelcomeEmail = async ({ name, email }) => {
  if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your_email@gmail.com') return;
  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: FROM, to: email,
      subject: `Welcome to ${APP_NAME}!`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#111;color:#f5f5f0;padding:32px;border-radius:12px;">
        <h2 style="color:#0A8A4A;">Welcome, ${name}!</h2>
        <p>Thanks for joining <strong>${APP_NAME}</strong> — where your golf game helps charities and wins prizes.</p>
        <ul style="color:#aaa;"><li>Subscribe to a plan</li><li>Enter your last 5 Stableford scores</li><li>Pick a charity you care about</li><li>Participate in monthly draws!</li></ul>
      </div>`
    });
  } catch (err) { console.error('Welcome email error:', err.message); }
};

exports.sendSubscriptionEmail = async ({ name, email, plan, endDate }) => {
  if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your_email@gmail.com') return;
  try {
    const transporter = createTransporter();
    const planLabel = plan === 'yearly' ? 'Yearly (Rs.4,999)' : 'Monthly (Rs.499)';
    const expiry = new Date(endDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    await transporter.sendMail({
      from: FROM, to: email,
      subject: `Subscription Activated - ${APP_NAME}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#111;color:#f5f5f0;padding:32px;border-radius:12px;">
        <h2 style="color:#0A8A4A;">Subscription Confirmed!</h2>
        <p>Hi ${name}, your <strong>${planLabel}</strong> plan is now active until <strong>${expiry}</strong>.</p>
        <p>Enter your Stableford scores to participate in draws!</p>
      </div>`
    });
  } catch (err) { console.error('Subscription email error:', err.message); }
};

exports.sendWinnerEmail = async ({ name, email, matchType, prizeAmount, drawnNumbers, month, year }) => {
  if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your_email@gmail.com') return;
  try {
    const transporter = createTransporter();
    const matchLabel = matchType === 'five_match' ? '5-Number Match' : matchType === 'four_match' ? '4-Number Match' : '3-Number Match';
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    await transporter.sendMail({
      from: FROM, to: email,
      subject: `You Won in the ${APP_NAME} Draw!`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#111;color:#f5f5f0;padding:32px;border-radius:12px;">
        <h2 style="color:#F5C842;">Congratulations, ${name}!</h2>
        <p>You achieved a <strong>${matchLabel}</strong> in the <strong>${monthNames[month - 1]} ${year}</strong> draw!</p>
        <p>Drawn numbers: <strong style="color:#0A8A4A;">${drawnNumbers.join(' - ')}</strong></p>
        <p>Prize: <strong style="color:#F5C842;">Rs.${prizeAmount.toLocaleString('en-IN')}</strong></p>
        <p style="color:#aaa;">Log in to upload your score proof screenshot for verification.</p>
      </div>`
    });
  } catch (err) { console.error('Winner email error:', err.message); }
};

exports.sendDrawPublishedEmail = async ({ email, name, month, year, drawnNumbers }) => {
  if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your_email@gmail.com') return;
  try {
    const transporter = createTransporter();
    const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    await transporter.sendMail({
      from: FROM, to: email,
      subject: `${APP_NAME} Draw Results - ${monthNames[month - 1]} ${year}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#111;color:#f5f5f0;padding:32px;border-radius:12px;">
        <h2 style="color:#0A8A4A;">${monthNames[month - 1]} ${year} Draw Results</h2>
        <p>Hi ${name}, the monthly draw has been published!</p>
        <p>Drawn numbers: <strong style="color:#F5C842;font-size:20px;">${drawnNumbers.join(' - ')}</strong></p>
        <p style="color:#aaa;">Log in to check if your scores matched!</p>
      </div>`
    });
  } catch (err) { console.error('Draw published email error:', err.message); }
};

exports.sendPayoutEmail = async ({ name, email, prizeAmount }) => {
  if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your_email@gmail.com') return;
  try {
    const transporter = createTransporter();
    await transporter.sendMail({
      from: FROM, to: email,
      subject: `Prize Payment Sent - ${APP_NAME}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#111;color:#f5f5f0;padding:32px;border-radius:12px;">
        <h2 style="color:#F5C842;">Payment Sent!</h2>
        <p>Hi ${name}, your prize of <strong style="color:#F5C842;">Rs.${prizeAmount.toLocaleString('en-IN')}</strong> has been marked as paid.</p>
      </div>`
    });
  } catch (err) { console.error('Payout email error:', err.message); }
};
