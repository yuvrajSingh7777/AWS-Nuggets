const express = require('express');
const passport = require('passport');
const {
  signup,
  login,
  googleAuthCallback,
  forgotPassword,
  // (optional) real resetPassword controller if implemented
} = require('../controllers/authController');

const router = express.Router();

// ✅ Email/Password Auth
router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

// ✅ Google OAuth 2.0 Auth Flow
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  googleAuthCallback
);

// ✅ (Optional) Reset Password Placeholder or Logic
router.post('/reset-password', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  res.json({ message: 'If this email exists, a reset link has been sent' });
});

module.exports = router;
