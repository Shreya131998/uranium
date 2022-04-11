const express = require('express');
const router = express.Router();

const userModel=require("../models/userModel")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", async function(req,res){
    let data=req.body 
    let savedData=await userModel.create(data)
    res.send(savedData)
} )

router.get("/getBookDetails",async function(req,res){
    let getData=await userModel.find()
    res.send(getData)

} )

module.exports = router;