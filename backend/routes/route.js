const express=require("express");
const router=express.Router();
const menucontroller=require("../controller/menucontroller");
const menuitemcontroller=require("../controller/menuitemcontroller");



router.post('/',menucontroller.CreateMenu);
router.get('/',menucontroller.getAllMenu);
router.get('/:id',menucontroller.getMenubyID);


router.post('/:menuID/menuitem',menuitemcontroller.CreateMenuItem);
router.get('/:menuID/menuitem', menuitemcontroller.getAllMenuItem); 


module.exports=router;