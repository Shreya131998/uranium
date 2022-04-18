const developerModel=require("../models/developerModel")
const batchModel=require("../models/batchesModel")
const createDeveloper=async function(req,res){
    let data=req.body
    
    let storedData=await developerModel.create(data)
    res.send(storedData)
}
const createBatch=async function(req,res){
    let data=req.body
    let storedData=await batchModel.create(data)
    res.send(storedData)
}

const getScholarship=async function(req,res){
    let data=await developerModel.find({gender:"female",percentage:{$gte:70}})
    res.send({data})
}

const getDevelopers=async function(req,res){
    
    let {percentage,program}=req.query
    
    
    
    let data=await batchModel.findOne({name:program}).select({_id:1})
    
    let data2=await developerModel.find({percentage:{$gte:percentage},batch:data._id})
    res.send(data2)
}
module.exports.createDeveloper=createDeveloper
module.exports.getScholarship=getScholarship
module.exports.getDevelopers=getDevelopers
module.exports.createBatch=createBatch