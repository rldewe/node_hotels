const passport=require('passport');
const LocalStrategy=require('passport-local');
const Person=require('./models/Person.js')


//local passport-AUTHENTICATION
passport.use(new LocalStrategy(async(USERNAME,PASSWORD,done)=>{
    //authentication logic here
    try{
        console.log('Received credentials:',USERNAME,PASSWORD)
        const user=await Person.findOne({username:USERNAME});
        if(!user){
            //done takes three parameters
            return done(null,false,{message:'No such User exists'});

        }
        //agar username mil jata hai to
        const isPasswordMatch=user.password===PASSWORD? true:false;
        if(isPasswordMatch){
            return done(null,user);
        }
        else{
            return done(null,false,{message:'Incorrect password'});
        }
    }
    catch(err){
        return done(err);
    }
}))

module.exports=passport;