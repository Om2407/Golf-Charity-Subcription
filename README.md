<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>GolfGives — README</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet"/>
<style>
  :root {
    --black: #0a0a0a;
    --dark: #111111;
    --card: #161616;
    --border: #222222;
    --green: #0A8A4A;
    --green-light: #12B562;
    --gold: #C9A84C;
    --white: #F5F5F0;
    --muted: #666666;
    --radius: 16px;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--black);
    color: var(--white);
    font-family: 'DM Sans', sans-serif;
    line-height: 1.7;
    overflow-x: hidden;
  }

  /* Hero */
  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 80px 24px;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 50% 0%, rgba(10,138,74,0.18) 0%, transparent 70%),
      radial-gradient(ellipse 60% 40% at 80% 80%, rgba(201,168,76,0.1) 0%, transparent 60%);
  }

  .grid-bg {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
  }

  .hero-content { position: relative; z-index: 2; max-width: 800px; }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(10,138,74,0.15);
    border: 1px solid rgba(10,138,74,0.3);
    border-radius: 100px;
    padding: 8px 20px;
    font-size: 13px;
    color: var(--green-light);
    font-weight: 500;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  .hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(56px, 10vw, 96px);
    font-weight: 900;
    line-height: 1.0;
    margin-bottom: 8px;
    letter-spacing: -2px;
  }

  .hero h1 .green { color: var(--green-light); }
  .hero h1 .gold { color: var(--gold); }

  .hero-sub {
    font-size: 18px;
    color: rgba(245,245,240,0.45);
    max-width: 560px;
    margin: 24px auto 48px;
    font-weight: 300;
  }

  .hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
  }

  .tag {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 8px;
    padding: 6px 16px;
    font-size: 13px;
    font-family: 'JetBrains Mono', monospace;
    color: rgba(245,245,240,0.6);
  }

  /* Sections */
  .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

  section { padding: 100px 0; }

  .section-label {
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--green);
    font-weight: 600;
    margin-bottom: 16px;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 5vw, 56px);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .section-desc {
    color: rgba(245,245,240,0.45);
    font-size: 17px;
    max-width: 560px;
    font-weight: 300;
  }

  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
    margin: 0;
  }

  /* Stats */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-top: 64px;
  }

  .stat {
    background: var(--card);
    padding: 40px 32px;
    text-align: center;
  }

  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 900;
    color: var(--green-light);
    line-height: 1;
    margin-bottom: 8px;
  }

  .stat-label { color: var(--muted); font-size: 14px; }

  /* Features grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2px;
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    overflow: hidden;
    margin-top: 64px;
  }

  .feature {
    background: var(--card);
    padding: 40px 32px;
    transition: background 0.2s;
  }

  .feature:hover { background: #1a1a1a; }

  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    margin-bottom: 20px;
  }

  .icon-green { background: rgba(10,138,74,0.15); }
  .icon-gold { background: rgba(201,168,76,0.15); }
  .icon-blue { background: rgba(59,130,246,0.15); }
  .icon-purple { background: rgba(139,92,246,0.15); }
  .icon-red { background: rgba(239,68,68,0.15); }
  .icon-teal { background: rgba(20,184,166,0.15); }

  .feature h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--white);
  }

  .feature p { color: var(--muted); font-size: 14px; line-height: 1.6; }

  /* Tech stack */
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 12px;
    margin-top: 48px;
  }

  .tech-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px 20px;
    text-align: center;
    transition: border-color 0.2s, transform 0.2s;
  }

  .tech-card:hover { border-color: var(--green); transform: translateY(-2px); }
  .tech-card .tech-icon { font-size: 32px; margin-bottom: 10px; }
  .tech-card .tech-name { font-size: 14px; font-weight: 600; color: var(--white); margin-bottom: 4px; }
  .tech-card .tech-role { font-size: 12px; color: var(--muted); }

  /* Setup steps */
  .steps { margin-top: 48px; display: flex; flex-direction: column; gap: 16px; }

  .step {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px 32px;
    display: flex;
    gap: 24px;
    align-items: flex-start;
    transition: border-color 0.2s;
  }

  .step:hover { border-color: rgba(10,138,74,0.4); }

  .step-num {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--green);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 15px;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .step-content h3 { font-size: 17px; font-weight: 600; margin-bottom: 8px; }
  .step-content p { color: var(--muted); font-size: 14px; margin-bottom: 12px; }

  .code-block {
    background: #0d0d0d;
    border: 1px solid #1e1e1e;
    border-radius: 8px;
    padding: 12px 16px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--green-light);
    overflow-x: auto;
  }

  /* Credentials */
  .creds-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;
    margin-top: 48px;
  }

  .cred-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px;
    position: relative;
    overflow: hidden;
  }

  .cred-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
  }

  .cred-card.admin::before { background: linear-gradient(90deg, var(--gold), #e8b84b); }
  .cred-card.user::before { background: linear-gradient(90deg, var(--green), var(--green-light)); }

  .cred-title {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 16px;
    font-weight: 600;
  }

  .cred-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid var(--border);
  }

  .cred-row:last-child { border-bottom: none; }
  .cred-key { font-size: 13px; color: var(--muted); }
  .cred-val {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    color: var(--white);
    background: rgba(255,255,255,0.05);
    padding: 4px 10px;
    border-radius: 6px;
  }

  /* Prize pool */
  .prize-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-top: 48px;
  }

  .prize-card {
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 36px 24px;
    text-align: center;
  }

  .prize-card.jackpot { border-color: rgba(201,168,76,0.4); background: rgba(201,168,76,0.05); }
  .prize-icon { font-size: 40px; margin-bottom: 16px; }
  .prize-percent {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 4px;
  }

  .prize-card.jackpot .prize-percent { color: var(--gold); }
  .prize-card:not(.jackpot) .prize-percent { color: var(--green-light); }
  .prize-type { font-size: 15px; font-weight: 600; margin-bottom: 8px; }
  .prize-note { font-size: 12px; color: var(--muted); }

  /* Company */
  .company-section {
    background: var(--card);
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .company-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    padding: 100px 0;
  }

  .company-logo {
    font-family: 'Playfair Display', serif;
    font-size: 40px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  .company-logo span { color: var(--green-light); }

  .company-desc {
    color: var(--muted);
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 32px;
  }

  .company-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .company-stat { padding: 20px; background: var(--black); border-radius: 12px; }
  .company-stat-num { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 900; color: var(--green-light); }
  .company-stat-label { font-size: 12px; color: var(--muted); margin-top: 4px; }

  .company-services { display: flex; flex-direction: column; gap: 12px; }

  .service {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px;
    background: var(--black);
    border-radius: 12px;
    border: 1px solid var(--border);
    transition: border-color 0.2s;
  }

  .service:hover { border-color: var(--green); }
  .service-icon { font-size: 24px; flex-shrink: 0; margin-top: 2px; }
  .service-name { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
  .service-desc { font-size: 13px; color: var(--muted); }

  /* Footer */
  footer {
    padding: 60px 0;
    text-align: center;
    border-top: 1px solid var(--border);
  }

  .footer-logo {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 8px;
  }

  .footer-logo span { color: var(--green-light); }
  .footer-sub { color: var(--muted); font-size: 14px; margin-bottom: 32px; }

  .footer-links { display: flex; gap: 24px; justify-content: center; flex-wrap: wrap; margin-bottom: 40px; }

  .footer-link {
    color: var(--muted);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;
  }

  .footer-link:hover { color: var(--green-light); }

  .footer-bottom { color: #333; font-size: 13px; }

  /* Checklist */
  .checklist { margin-top: 48px; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; }

  .check-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 20px;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 10px;
    font-size: 14px;
  }

  .check-icon { color: var(--green-light); font-size: 18px; flex-shrink: 0; }

  @media (max-width: 768px) {
    .company-inner { grid-template-columns: 1fr; gap: 40px; }
    .prize-grid { grid-template-columns: 1fr; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
  }
</style>
</head>
<body>

<!-- HERO -->
<section class="hero">
  <div class="grid-bg"></div>
  <div class="hero-content">
    <div class="badge">⛳ Digital Heroes · Full-Stack Project</div>
    <h1>Golf<span class="green">Gives</span></h1>
    <h1 style="font-size:clamp(24px,4vw,40px);font-family:'DM Sans',sans-serif;font-weight:300;color:rgba(245,245,240,0.5);letter-spacing:0;">Golf Charity Subscription Platform</h1>
    <p class="hero-sub">A subscription-driven web application combining golf performance tracking, charity fundraising, and a monthly draw-based reward engine.</p>
    <div class="hero-tags">
      <span class="tag">React 18</span>
      <span class="tag">Node.js</span>
      <span class="tag">MongoDB Atlas</span>
      <span class="tag">Razorpay</span>
      <span class="tag">Vercel</span>
      <span class="tag">JWT Auth</span>
      <span class="tag">Nodemailer</span>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- STATS -->
<section>
  <div class="container">
    <p class="section-label">Platform Overview</p>
    <h2 class="section-title">Built for scale,<br/>designed with heart.</h2>
    <p class="section-desc">Every feature engineered to the PRD spec — from rolling score windows to jackpot carryovers.</p>
    <div class="stats-grid">
      <div class="stat">
        <div class="stat-num">3</div>
        <div class="stat-label">User Roles</div>
      </div>
      <div class="stat">
        <div class="stat-num">5</div>
        <div class="stat-label">Score Rolling Window</div>
      </div>
      <div class="stat">
        <div class="stat-num">2</div>
        <div class="stat-label">Subscription Plans</div>
      </div>
      <div class="stat">
        <div class="stat-num">10%</div>
        <div class="stat-label">Min Charity Contribution</div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- FEATURES -->
<section>
  <div class="container">
    <p class="section-label">Core Features</p>
    <h2 class="section-title">Everything in the PRD,<br/>nothing left out.</h2>
    <div class="features-grid">
      <div class="feature">
        <div class="feature-icon icon-green">💳</div>
        <h3>Subscription Engine</h3>
        <p>Monthly (₹499) and Yearly (₹4,999) plans via Razorpay. Real-time subscription validation on every request. Handles renewal, cancellation, and lapsed states.</p>
      </div>
      <div class="feature">
        <div class="feature-icon icon-gold">⛳</div>
        <h3>Score Management</h3>
        <p>5-score rolling window in Stableford format (1–45). Auto-replaces oldest score. Duplicate date prevention enforced on both add and edit. Reverse chronological display.</p>
      </div>
      <div class="feature">
        <div class="feature-icon icon-blue">🎰</div>
        <h3>Draw Engine</h3>
        <p>Monthly draws with random or algorithmic (frequency-weighted) number generation. 3/4/5-number match tiers. Admin simulation mode before publishing. Jackpot rollover.</p>
      </div>
      <div class="feature">
        <div class="feature-icon icon-purple">❤️</div>
        <h3>Charity System</h3>
        <p>Users select a charity at signup. Minimum 10% contribution enforced. Voluntary increase supported. Independent donations. Featured charity spotlight on homepage.</p>
      </div>
      <div class="feature">
        <div class="feature-icon icon-red">🏆</div>
        <h3>Winner Verification</h3>
        <p>Winners upload score proof screenshots. Admin approve or reject submissions. Payment states: Pending → Paid. Full audit trail maintained.</p>
      </div>
      <div class="feature">
        <div class="feature-icon icon-teal">📧</div>
        <h3>Email Notifications</h3>
        <p>Automated emails for: welcome, subscription confirmation, draw results (all subscribers), winner alerts, and payout confirmations via Gmail SMTP.</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- PRIZE POOL -->
<section>
  <div class="container">
    <p class="section-label">Prize Pool Logic</p>
    <h2 class="section-title">Transparent.<br/>Automated. Fair.</h2>
    <p class="section-desc">Fixed distribution enforced automatically. Split equally among multiple winners in the same tier.</p>
    <div class="prize-grid">
      <div class="prize-card jackpot">
        <div class="prize-icon">🏆</div>
        <div class="prize-percent">40%</div>
        <div class="prize-type">5-Number Match</div>
        <div class="prize-note">Jackpot · Rolls over if unclaimed</div>
      </div>
      <div class="prize-card">
        <div class="prize-icon">🥈</div>
        <div class="prize-percent">35%</div>
        <div class="prize-type">4-Number Match</div>
        <div class="prize-note">No rollover</div>
      </div>
      <div class="prize-card">
        <div class="prize-icon">🥉</div>
        <div class="prize-percent">25%</div>
        <div class="prize-type">3-Number Match</div>
        <div class="prize-note">No rollover</div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- TECH STACK -->
<section>
  <div class="container">
    <p class="section-label">Tech Stack</p>
    <h2 class="section-title">Modern. Scalable.<br/>Production-ready.</h2>
    <div class="tech-grid">
      <div class="tech-card">
        <div class="tech-icon">⚛️</div>
        <div class="tech-name">React 18</div>
        <div class="tech-role">Frontend</div>
      </div>
      <div class="tech-card">
        <div class="tech-icon">🟢</div>
        <div class="tech-name">Node.js</div>
        <div class="tech-role">Runtime</div>
      </div>
      <div class="tech-card">
        <div class="tech-icon">🚂</div>
        <div class="tech-name">Express</div>
        <div class="tech-role">Backend API</div>
      </div>
      <div class="tech-card">
        <div class="tech-icon">🍃</div>
        <div class="tech-name">MongoDB</div>
        <div class="tech-role">Database</div>
      </div>
      <div class="tech-card">
        <div class="tech-icon">🔐</div>
        <div class="tech-name">JWT</div>
        <div class="tech-role">Auth</div>
      </div>
      <div class="tech-card">
        <div class="tech-icon">💳</div>
        <div class="tech-name">Razorpay</div>
        <div class="tech-role">Payments</div>
      </div>
      <div class="tech-card">
        <div class="tech-icon">📧</div>
        <div class="tech-name">Nodemailer</div>
        <div class="tech-role">Emails</div>
      </div>
      <div class="tech-card">
        <div class="tech-icon">▲</div>
        <div class="tech-name">Vercel</div>
        <div class="tech-role">Deployment</div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- SETUP -->
<section>
  <div class="container">
    <p class="section-label">Local Setup</p>
    <h2 class="section-title">Running in<br/>5 minutes.</h2>
    <div class="steps">
      <div class="step">
        <div class="step-num">1</div>
        <div class="step-content">
          <h3>Clone & Install Backend</h3>
          <p>Navigate to the backend folder and install dependencies.</p>
          <div class="code-block">cd backend &amp;&amp; npm install</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">2</div>
        <div class="step-content">
          <h3>Configure Environment Variables</h3>
          <p>Fill in <code style="color:var(--green-light);font-family:'JetBrains Mono',monospace;">backend/.env</code> with your MongoDB URI, Razorpay keys, JWT secret, and Gmail credentials.</p>
          <div class="code-block">MONGO_URI=mongodb+srv://...<br/>RAZORPAY_KEY_ID=rzp_test_...<br/>JWT_SECRET=your_secret<br/>EMAIL_USER=you@gmail.com<br/>EMAIL_PASS=app_password</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">3</div>
        <div class="step-content">
          <h3>Seed the Database</h3>
          <p>Creates admin user and 4 sample charities in your MongoDB Atlas database.</p>
          <div class="code-block">node seed.js</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">4</div>
        <div class="step-content">
          <h3>Start Backend Server</h3>
          <p>Runs on <code style="color:var(--green-light);font-family:'JetBrains Mono',monospace;">http://localhost:5000</code></p>
          <div class="code-block">npm run dev</div>
        </div>
      </div>
      <div class="step">
        <div class="step-num">5</div>
        <div class="step-content">
          <h3>Start Frontend</h3>
          <p>Navigate to frontend folder, install and run. Opens on <code style="color:var(--green-light);font-family:'JetBrains Mono',monospace;">http://localhost:3000</code></p>
          <div class="code-block">cd ../frontend &amp;&amp; npm install &amp;&amp; npm start</div>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- CREDENTIALS -->
<section>
  <div class="container">
    <p class="section-label">Test Credentials</p>
    <h2 class="section-title">Ready to test<br/>out of the box.</h2>
    <div class="creds-grid">
      <div class="cred-card admin">
        <div class="cred-title">👑 Admin Account</div>
        <div class="cred-row">
          <span class="cred-key">Email</span>
          <span class="cred-val">admin@golfgives.com</span>
        </div>
        <div class="cred-row">
          <span class="cred-key">Password</span>
          <span class="cred-val">Admin@123</span>
        </div>
        <div class="cred-row">
          <span class="cred-key">Access</span>
          <span class="cred-val">Full Admin Panel</span>
        </div>
      </div>
      <div class="cred-card user">
        <div class="cred-title">👤 Test User Flow</div>
        <div class="cred-row">
          <span class="cred-key">Register</span>
          <span class="cred-val">/register</span>
        </div>
        <div class="cred-row">
          <span class="cred-key">Subscribe</span>
          <span class="cred-val">Razorpay Test Mode</span>
        </div>
        <div class="cred-row">
          <span class="cred-key">Card No.</span>
          <span class="cred-val">4111 1111 1111 1111</span>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- TESTING CHECKLIST -->
<section>
  <div class="container">
    <p class="section-label">Testing Checklist</p>
    <h2 class="section-title">All PRD requirements<br/>covered.</h2>
    <div class="checklist">
      <div class="check-item"><span class="check-icon">✅</span> User signup & login</div>
      <div class="check-item"><span class="check-icon">✅</span> Subscription flow (monthly & yearly)</div>
      <div class="check-item"><span class="check-icon">✅</span> Score entry — 5-score rolling logic</div>
      <div class="check-item"><span class="check-icon">✅</span> Duplicate date prevention</div>
      <div class="check-item"><span class="check-icon">✅</span> Draw system logic & simulation</div>
      <div class="check-item"><span class="check-icon">✅</span> Charity selection & contribution</div>
      <div class="check-item"><span class="check-icon">✅</span> Winner verification flow</div>
      <div class="check-item"><span class="check-icon">✅</span> Payout tracking</div>
      <div class="check-item"><span class="check-icon">✅</span> User dashboard — all modules</div>
      <div class="check-item"><span class="check-icon">✅</span> Admin panel — full control</div>
      <div class="check-item"><span class="check-icon">✅</span> Email notifications</div>
      <div class="check-item"><span class="check-icon">✅</span> Responsive design</div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- COMPANY -->
<section class="company-section">
  <div class="container">
    <div class="company-inner">
      <div>
        <p class="section-label">Built By</p>
        <div class="company-logo">Digital <span>Heroes</span></div>
        <p class="company-desc">A premium full-stack development and digital marketing agency led by Shreyansh Singh, founder of Digital Marketing Heroes — a YouTube channel with 2.5M+ subscribers. Since 2016, the agency has built and scaled 2,000+ brands, generating $10M+ in sales for clients ranging from startups to multi-million dollar businesses.</p>
        <div class="company-stats">
          <div class="company-stat">
            <div class="company-stat-num">2.5M+</div>
            <div class="company-stat-label">YouTube Subscribers</div>
          </div>
          <div class="company-stat">
            <div class="company-stat-num">2,000+</div>
            <div class="company-stat-label">Brands Built</div>
          </div>
          <div class="company-stat">
            <div class="company-stat-num">$10M+</div>
            <div class="company-stat-label">Sales Generated</div>
          </div>
          <div class="company-stat">
            <div class="company-stat-num">&lt;1.5s</div>
            <div class="company-stat-label">Store Load Time</div>
          </div>
        </div>
      </div>
      <div class="company-services">
        <div class="service">
          <div class="service-icon">⚡</div>
          <div>
            <div class="service-name">Full-Stack / MERN Development</div>
            <div class="service-desc">Custom web applications, APIs, database architecture, cloud deployment</div>
          </div>
        </div>
        <div class="service">
          <div class="service-icon">🛍️</div>
          <div>
            <div class="service-name">Shopify & WordPress Builds</div>
            <div class="service-desc">Premium stores with CRO-optimised layouts and ultra-fast load times</div>
          </div>
        </div>
        <div class="service">
          <div class="service-icon">🎨</div>
          <div>
            <div class="service-name">UI/UX & CRO Design</div>
            <div class="service-desc">Conversion-focused design backed by $100M+ in split-test data</div>
          </div>
        </div>
        <div class="service">
          <div class="service-icon">🚀</div>
          <div>
            <div class="service-name">Brand Incubation (0-to-1)</div>
            <div class="service-desc">Concept to market — strategy, identity, MVP, and growth</div>
          </div>
        </div>
        <div class="service">
          <div class="service-icon">🌐</div>
          <div>
            <div class="service-name">digitalheroes.co.in</div>
            <div class="service-desc">Visit our website for more information and portfolio</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer-logo">Golf<span>Gives</span></div>
    <p class="footer-sub">Built by Digital Heroes · digitalheroes.co.in</p>
    <div class="footer-links">
      <a class="footer-link" href="https://digitalheroes.co.in">Website</a>
      <a class="footer-link" href="https://portfolio.digitalheroes.co.in">Portfolio</a>
      <a class="footer-link" href="https://youtube.com/@DigitalMarketingHeroes">YouTube</a>
      <a class="footer-link" href="https://www.figma.com/design/uz7W70LLi2uHDokNAJEaJQ">Figma</a>
    </div>
    <p class="footer-bottom">© 2026 Digital Heroes · Sample Assignment Document · Full-Stack Development Trainee Selection</p>
  </div>
</footer>

</body>
</html>