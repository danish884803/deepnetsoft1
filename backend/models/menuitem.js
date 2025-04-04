const mongoose=require("mongoose");

const MenuiteamSchema=new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true},
    menuId:{type:mongoose.Schema.Types.ObjectId,ref:'Menu',required:true}
});

module.exports=mongoose.model("Menuitem",MenuiteamSchema)