const mongoose= require ("mongoose")

const OrderSchema= new mongoose.Schema({
    name:String,
    address:String,
    type:String,
    weight:String,
    date:String,
    num:Number
})
const OrdersModel=new mongoose.model("orders", OrderSchema)
module.exports=OrdersModel

