const express = require('express');
const router = express.Router();


// Home Page GET Route
router.get('/', (req, res) => {
    res.render('index')
})


// FAQ Page GET Route
router.get('/faq', (req, res) => {
    res.render('faq')
})

module.exports = router;