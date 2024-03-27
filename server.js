const express=require("express")
const app=express()
const db=require('./db')
const Person=require('./models/Person.js')
const MenuItem=require('./models/Menu.js')
const bodyParser=require('body-parser');
const passport=require('./auth.js');


require('dotenv').config();
const PORT=process.env.PORT || 3000;
const { connect } = require("mongoose")
app.use(bodyParser.json())



//MIDDLEWARE FUNCTION
const logRequest=(req,res,next)=>{
    console.log(`${new Date().toLocaleString()} Rewuest made to :${req.originalUrl}`);
    next();
}

app.use(logRequest);


//use passport authentication
app.use(passport.initialize());

const localAuthMiddleware=passport.authenticate('local',{session:false})
//home route
app.get('/',function(req,res){
    res.send('Helllo welcome to my hotel')
})




//usig router


const personRoutes=require('./routes/personRoutes.js')
app.use('/person',localAuthMiddleware,personRoutes);


const menuRouter=require('./routes/menuRoutes.js');
app.use('/menu',localAuthMiddleware,menuRouter);

app.listen(PORT,()=>{
    console.log("Connected to port 3000")
})