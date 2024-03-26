const express=require('express')
const router=express.Router();
const Person=require('../models/Person.js')


//POST Route to add a person
router.post('/',async(req,res)=>{

    try{
        const data=req.body;//bosy parser aaye hue data ko .body mein store kar rha hai
    
    const newPerson=new Person(data);
    //newPerson.name=data.name;
    //newPerson.age=data.age;
    //newPerson.work=data.work;
    const response=await newPerson.save();
    console.log("data saves");
    res.status(200).json(response)
    }
    catch(err){
        console.log("eror");
        res.status(500).json({error:"internal server error"})
    }
})

//get method to get hte person
router.get('/',async(req,res)=>{
    try{
        const data=await Person.find();
        console.log("data fetched")
        res.json(data);
    }
    catch(err){

    }
})
module.exports=router;