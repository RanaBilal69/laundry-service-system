const mongoose= require ("mongoose")

const FeedbackSchema= new mongoose.Schema({
    name:String,
    feedback:String 
})
const FeedbackModel=new mongoose.model("feedbacks", FeedbackSchema)
module.exports=FeedbackModel 

