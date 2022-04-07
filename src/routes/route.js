const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

router.get('/all-candidates', function (req, res) {
    const arr=["jan","feb","mar","apr","may","june","july","aug","sept","oct"]
    
    res.send(arr)
    
    
});

router.get('/candidates', function (req, res) {
    const value1=req.query.count
    
     let arr1=[]
     let arr=["jan","feb","mar","apr","may","june","july","aug","sept","oct"]
     for(let i=0;i<value1;i++){
         
         arr1.push(arr[i])
     }
     res.send(arr1)
    
    
});




module.exports = router;
// adding this comment for no reason