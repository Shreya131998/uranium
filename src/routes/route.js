const express = require('express');
const router = express.Router();
const authorModel=require("../models/newAuthorModel")
const publisherModel=require("../models/newPublisherModel")
const bookModel=require("../models/newBookModel")
router.post("/createAuthor",async function(req,res){
    let data=req.body 
    let storedData=await authorModel.create(data)
    res.send(storedData)

})

router.post("/createPublisher",async function(req,res){
    let data=req.body 
    let storedData=await publisherModel.create(data)
    res.send(storedData)

})
router.post("/createBook2",async function(req,res){

})

router.post("/createBook",async function(req,res){
    let data=req.body
    
    
     if(data.author===undefined){
         res.send("author id is required")

     }
     else if(data.author!==undefined){
         let savedData=await authorModel.find({_id:data.author})
         
         if(savedData.length===0){
             res.send("author is not present.")

         }
         else if(data.publisher===undefined){
            res.send("publisher id is required")
         }
         else if(data.publisher!==undefined){
            let savedData=await publisherModel.find({_id:data.publisher})
            
            if(savedData.length===0){
                res.send(" publisher is not present")
            }
            else{
                let storedData=await bookModel.create(data)
                res.send(storedData)

            }

     
     
     }
     
     }
     


})

router.get("/getBookDetails",async function(req,res){
    let data=await bookModel.find().populate("author")
    let data2=await bookModel.find().populate("publisher")
    res.send({data,data2})
})

router.put("/updateResult",async function(req,res){
    let data=await publisherModel.find({$or:[{name:"Penguin"},{name:"HarperCollins"}]}).select({_id:1})
    
    for(let i=0;i<data.length;i++){
        await bookModel.updateMany(
            {publisher:data[i]},
            {$set:{isHardCover:true}}
        )
    }
    res.send("Successfully updated")

   
   
})

router.put("/updateResult2",async function(req,res){
    let data=await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    
    
     for(let i=0;i<data.length;i++){
         await bookModel.updateMany(
             {author:data[i]},
             {$inc:{"price":10}}
            
         )
        
     }
    res.send("Successfully updated")
    

})



module.exports = router;