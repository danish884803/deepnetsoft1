const menuitem = require("../models/menuitem");
const MenuItem=require("../models/menuitem");


exports.CreateMenuItem=async(req,res)=>{
    const {name,description,price}=req.body;
    const menuitem=new MenuItem({
        name,
        description,
        price,
        menuId:req.params.menuID
    })
    await menuitem.save();
    res.status(201).json(menuitem);
}

exports.getAllMenuItem = async (req, res) => {
    try {
        const menuitems = await MenuItem.find({ menuId: req.params.menuID }); // Changed from menuId to menuID
        res.json(menuitems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}