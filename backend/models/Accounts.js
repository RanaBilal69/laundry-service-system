const mongoose= require ("mongoose")

const AccountSchema= new mongoose.Schema({
    id:Number,
    amount:Number,
    mop:String 
})
const AccountsModel=new mongoose.model("accounts", AccountSchema)
module.exports=AccountsModel 