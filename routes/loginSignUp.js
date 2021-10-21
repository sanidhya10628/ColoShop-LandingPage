const express = require('express');
const router = express.Router();


// Login or Sign In GET Route
router.get('/login', (req, res) => {
    res.render('signIn')
})

// Sign Up GET Route
router.get('/signUp', (req, res) => {
    res.render('signUp')
})

// Forgot Password GET Route
router.get('/forgotPassword', (req, res) => {
    res.render('forgot-password');
})

module.exports = router;