# GolfGives — Golf Charity Subscription Platform

A subscription-driven web app combining golf performance tracking, charity fundraising, and a monthly draw-based reward engine.

---

## Quick Start (Local Development)

### Prerequisites
- Node.js v18+
- MongoDB Atlas account (free tier works)
- Razorpay account (test mode)

---

### 1. Backend Setup

```bash
cd backend
npm install
```

Edit `backend/.env` and fill in:
- `MONGO_URI` — your MongoDB Atlas connection string
- `RAZORPAY_KEY_ID` + `RAZORPAY_KEY_SECRET` — from razorpay.com dashboard
- `JWT_SECRET` — any long random string
- `EMAIL_USER` + `EMAIL_PASS` — Gmail + App Password (optional, emails silently skip if not set)

```bash
npm run dev       # starts on http://localhost:5000
npm run seed      # (optional) seeds sample charities + admin user
```

**Seed credentials (after running seed):**
- Admin: `admin@golfgives.com` / `admin123`
- Test User: `test@golfgives.com` / `test123`

---

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Edit `frontend/.env`:
- `REACT_APP_API_URL` should be `http://localhost:5000/api` for local dev
- `REACT_APP_RAZORPAY_KEY_ID` — same as backend

```bash
npm start         # starts on http://localhost:3000
```

---

## Deployment (Vercel)

### Backend
1. Create a **new** Vercel account
2. Import backend folder
3. Add all env variables from `backend/.env` in Vercel dashboard
4. Deploy — note your backend URL (e.g. `https://your-backend.vercel.app`)

### Frontend
1. Update `frontend/.env` → set `REACT_APP_API_URL=https://your-backend.vercel.app/api`
2. Deploy frontend folder to Vercel
3. Add env variables in Vercel dashboard

---

## Tech Stack
- **Frontend:** React 18, React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Payments:** Razorpay
- **Auth:** JWT
- **Email:** Nodemailer (Gmail SMTP)
- **Deploy:** Vercel

---

## Features
- Subscription system (Monthly ₹499 / Yearly ₹4,999) via Razorpay
- Golf score entry — 5-score rolling window, Stableford format (1–45), duplicate date prevention
- Monthly prize draws — random or algorithmic, 3/4/5-number match
- Prize pool — 40% jackpot (rollover) / 35% four-match / 25% three-match
- Charity selection — min 10% subscription contribution, independent donations
- Winner verification — proof upload, admin approve/reject, payout tracking
- Email notifications — welcome, subscription, draw results, winner alerts, payout confirmation
- Full admin dashboard — users, draws, charities, winners, analytics
