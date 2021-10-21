const express = require('express');
const router = express.Router();

router.get('/productPage', (req, res) => {
    res.render('product-page')
})




module.exports = router;