const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/movies/:indexNumber', function(req, res) {
    const value=req.params.indexNumber

    const arr=['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    const arrlen=arr.length 
    if(value<=arrlen-1){
        res.send(arr[value])
    }
    else{
        let str="use a valid index"
        res.send(str)
    }
    
    
    
})

router.get('/movies', function (req, res) {
    const arr=['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins']
    res.send(arr)

});

router.get('/films', function (req, res) {
    let arr1=[ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
    res.send(arr1)

});

router.get('/films/:filmId', function(req, res){
    
    let value1=req.params.filmId
    let arr1=[ 
        {
        "id": 1,
        "name": "The Shining"
       }, 
       {
        "id": 2,
        "name": "Incendies"
       }, 
       {
        "id": 3,
        "name": "Rang de Basanti"
       }, 
       {
        "id": 4,
        "name": "Finding Nemo"
       }
    ]
    
    let i   
    for(i=0;i<arr1.length;i++){
        let val=arr1[i]
        if(val.id==value1){
            res.send(val)
            break
        }
        
    }
    if(i===arr1.length){
        res.send("no movie exist with this id")
    }


});

// router.get('/missingno', function (req, res) {
//     let arr=[1,2,3,4,5,7,8,9]
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     console.log(sum)
//     let sumofNaturalNums=(9*(9+1))/2
//     let no=sumofNaturalNums-sum
    
    
//     console.log(no)
//     res.send(no)

// });

 router.get('/missingith', function (req, res) {
     const arr=[33,34,35,37,38]
     for(let i=0;i<arr.length-1;i++){
         if(arr[i+1]===(arr[i]+1)){

         }
         else{
             res.send(arr[i]+1)
             break

         }
     }

 });






module.exports = router;
// adding this comment for no reason