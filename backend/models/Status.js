const mongoose= require ("mongoose")

const StatusSchema= new mongoose.Schema({
    number:Number,
    id:Number,
    status:String,
    delivery:String
})
const StatusModel=new mongoose.model("status", StatusSchema)
module.exports=StatusModel 


