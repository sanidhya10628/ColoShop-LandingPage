const express = require('express');
const router = express.Router();


// 1. Your Orders
router.get('/user/orders', (req, res) => {
    res.render('userpages/orders')
})


// 2. Login and Security
router.get('/user/profile', (req, res) => {
    res.render('userpages/profile')
})

// 3. Your address
router.get('/user/address-book', (req, res) => {
    res.render('userpages/address-book')
})

// 4. My Coupons
router.get('/user/myCoupons', (req, res) => {
    res.render('userpages/myCoupons')
})


// 5. Cart
router.get('/user/cart', (req, res) => {
    res.render('userpages/my-cart')
})

// 6. Wishlist
router.get('/user/wishlist', (req, res) => {
    res.send("Sorry! Working on that")
})



module.exports = router;