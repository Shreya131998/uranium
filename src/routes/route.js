const express = require('express');
const newone=require("./logger");

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(newone.endpoint)
    
    
    
});

module.exports = router;
// adding this comment for no reason