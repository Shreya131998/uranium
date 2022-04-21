const mongoose=require("mongoose")
const developerSchema=new mongoose.Schema({
    name:String,
	gender:{
        type:String,
        enum:["male","female","other"]
    },
	percentage:Number,
batch: {type:mongoose.Schema.Types.ObjectId,
    ref:"batches"}

})
module.exports=mongoose.model("developer",developerSchema)