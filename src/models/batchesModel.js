const mongoose=require("mongoose")
const batchSchem=new mongoose.Schema({
    name: String,
size: Number,
program: {
    type:String,
    enum:["backend" ,"frontend"]
}

})
module.exports=mongoose.model("batches",batchSchem)