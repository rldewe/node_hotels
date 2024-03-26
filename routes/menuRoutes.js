const express=require('express')
const router=express.Router();
const MenuItem=require('../models/Menu.js');
const { route } = require('./personRoutes.js');

//post and get methods for menuItem
//post is basically create data
//get is read data
router.post('/',async(req,res)=>{
    try{
        const data=req.body;//body se data nikal liya
        const newMenu=new MenuItem(data);//newMenu create kiya jisme menuitem format mein data daal diys
        const create=await newMenu.save();//create data mein save kar liya
        console.log("menu details saved")
        res.status(200).json(create);//json format mein send ho jayega
    }
    catch(err){
        console.log("menu item post error");
        res.json({error:"kuch eror hogya"})
    }
})
router.get('/',async(req,res)=>{
    try{
        const data= await MenuItem.find();
        console.log("get se data le liya")
        res.json(data);
    }
    catch(err){
        console.log("menu get mein error");
        res.json({error:"menu get mein error"})
    }
})

module.exports=router;

