const mongoose=require('mongoose')
//connection of mongodb to node using mongoose

//define mongoose connection
const mongoURL='mongodb://localhost:27017/hotels'

//set up
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

//eevny listener-> similarly can be done for erro or dicsonneced
db.on('connected',()=>{
    console.log("Connected db.js successfully")
})
db.on('disconnected',()=>{
    console.log("Disconnected db.js successfully")
})


module.exports=db;