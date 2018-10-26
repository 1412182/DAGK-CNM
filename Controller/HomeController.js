'use strict'
const express = require('express');

const router = express.Router();


/**
 *   Router dẫn đến HomePage
*/
router.get('/', (req,res)=>{
    res.send('Home Page');
    res.end();
});

/**
 *   Router dẫn đến HomePage
*/
router.get('/Home', (req,res) => {
    res.redirect('/');
});

/**
 *   Router dẫn đến HomePage
*/
router.get('/Index', (req,res) =>{
    res.redirect('/');
});

module.exports = router;