const express = require('express');
const newone=require("../logger/logger.js");
const newtwo=require("../util/helper.js")
const newthree=require("../validator/formatter.js")
const _=require("lodash")

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    newone.welcome()
    newtwo.printDate()
    newtwo.printMonth()
    newtwo.getBatchInfo()
    console.log(newthree.string1)
    console.log(newthree.string2)
    console.log(newthree.string3)


    
    
    
    
});
router.get('/hello', function (req, res){
    const arr=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"]
    console.log(_.chunk(arr,4))
    const arr1=[1,3,5,7,9,11,13,15,17,19]
    console.log(_.tail(arr1))
    const un1=[1,3,5,6]
    const un2=[5,9,7,6]
    const un3=[9,8,2,8]
    const un4=[10,14,52,60]
    const un5=[11,12,7,90]
    console.log(_.union(un1,un2,un3,un4,un5))
    const arr6=[["horror","The Shining"],["drama","Titanic"],["thriller", "Shutter Island"],["fantasy","Pans Labyrinth"]]
    
    console.log(_.fromPairs(arr6))


});

module.exports = router;
// adding this comment for no reason