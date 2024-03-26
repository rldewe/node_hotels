const express=require("express")
const app=express()
const db=require('./db')
const Person=require('./models/Person.js')
const MenuItem=require('./models/Menu.js')
const bodyParser=require('body-parser');
const { connect } = require("mongoose")
app.use(bodyParser.json())
app.get('/',function(req,res){
    res.send('Helllo welcome to my hotel')
})






//usig router
const personRoutes=require('./routes/personRoutes.js')
app.use('/person',personRoutes);


const menuRouter=require('./routes/menuRoutes.js');
app.use('/menu',menuRouter);

app.listen(3000,()=>{
    console.log("Connected to port 3000")
})