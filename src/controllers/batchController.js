let batchModel=require("../models/batchesModel")
const createBatch=async function(req,res){
    let data=req.body
    let storedData=await batchModel.create(data)
    res.send(storedData)
}
module.exports.createBatch=createBatch