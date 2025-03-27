const Menu=require("../models/menu");

exports.CreateMenu= async(req,res)=>{
    const {name,description}=req.body;
    const menu=new Menu({
        name,description
    });
    await menu.save();
    res.status(201).json(menu);
};


exports.getAllMenu=async(req,res)=>{
    const menus=await Menu.find();
    res.json(menus);
}

exports.getMenubyID=async(req,res)=>{
    const menu=await Menu.findById(req.params.id);
    res.json(menu);
}