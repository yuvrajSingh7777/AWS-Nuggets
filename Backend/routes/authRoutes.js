const express = require('express');
const passport = require('passport');
const {
  signup,
  login,
  googleAuthCallback,
  forgotPassword,
  resetPassword
  
} = require('../controllers/authController');

const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);


router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  googleAuthCallback
);


router.post('/reset-password', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: 'Email is required' });

  res.json({ message: 'If this email exists, a reset link has been sent' });
});

module.exports = router;
