import expressn from "express"
import cors from "cors";
import rout from './routes/multi_routes.mjs'
import  cookieParser  from "cookie-parser";
import session from "express-session";
import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import { data } from '../src/util/contains.mjs'

import mongoose from "mongoose"
 import {User} from '../src/Mongoose/Schema/user.mjs' 
import { comparePassword } from "./Mongoose/Schema/bcryp.mjs";
import bcrypt from 'bcrypt'


import {Strategy as GoogleStrategy } from 'passport-google-oauth20'

import crypto from  'crypto'
import { setpass } from "./password.mjs";

    import dotenv from 'dotenv';
dotenv.config();
import Razorpay from "razorpay";




const app=expressn();
app.use(expressn.json())
app.use(cors());

mongoose.connect('mongodb://localhost/Express').
then(()=>console.log("Database connected")).catch((err)=>{console.log(err.message)})



app.use(cookieParser("saravana"));
app.use(expressn.json())
app.use(session({
    secret:"seceret for the seesion",
    saveUninitialized:false,
resave:false,
cookie:{
maxAge:6000000
}
}
))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

app.use(passport.initialize())
app.use(passport.session())






passport.use(new LocalStrategy(
  { usernameField: "email", passwordField: "password" },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email: email });

      if (!user) {
        return done(null, false, { message: "Invalid Email" });
      }

      if (!comparePassword(password,user.password)) {
        return done(null, false, { message: "Invalid Password" });
      }

      return done(null, user);

    } catch (err) {
      return done(err);
    }
  }
));
 


passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SERVICE ,
    callbackURL: "/google/login/callback"
  },
   async function(accessToken, refreshToken, profile,done) {
    try{
const user=await User.findOne({googleId:profile.id})
if(user){
    return done(null,user)
}
const email=profile.emails?.[0]?.value;
const newuser=await User.create({
    googleId:profile.id,
    username:profile.displayName,
    email
})
return   done(null,newuser)
  }
catch(err){
    done(null,err.message)
}
   }
));



app.post('/logins',(req,res,next)=>{
    passport.authenticate("local",(err,user,info)=>{
        if(err) {next(err);
        }
    if(!user){
        return res.send({message:info?.message||"Login failed"})
    }
    req.logIn(user,(err)=>{
        if(err) next(err)
            return res.json({message:"Login successfull",user})
    })
    })
    (req,res,next);
})

passport.serializeUser((user,done)=>{
    done(null,user.id);
})
passport.deserializeUser( async (id,done)=>{
    try{
    const user= await User.findById(id);
    done(null,user);
    }
    catch(err){
return res.send({msg:"user not found"})
    }
    
}) 


app.get('/google/login',passport.authenticate("google",
    {
        scope:["profile","email"]
    }
))

app.get('/google/login/callback',passport.authenticate("google",{
    failureRedirect:'/login'
}),
(req,res)=>{
    res.send({msg:"Google Login Sucess",user:req.user})
}    
)




app.post('/api/forgot', async (req,res)=>{
    const {email}=req.body;
    console.log(email)
    const user=await User.findOne({email:email})
if(!user){
    return res.send({msg:"User not found"})
}
const token=crypto.randomBytes(20).toString("hex");
user.resetToken=token;
user.resetTokenExpiry=Date.now()+5*60000;
await user.save();


  const link = `http://localhost:5173/reset-password/${token}`;

await setpass(email,link);
res.send({msg:"an link is send to the user"})
})

app.post('/reset-password/:token',async (req,res)=>{
const token=req.params.token;
console.log(token)
console.log(req.body)
const user=await User.findOne(
    {
     resetToken:token,
     resetTokenExpiry:{$gt:Date.now()}
   
    }
)
if(!user){
    return res.send({msg:"User not found "})
}

const {newpass}=req.body;

user.password=bcrypt.hashSync(newpass,10);

console.log(user.password)

user.resetToken=undefined;
user.resetTokenExpiry=undefined;
await user.save();
return res.send("user password are changed ")
})
2
app.use(rout)
app.listen(5174,()=>{
    console.log(`port is running`)
});



const razorpay=new Razorpay({
    key_id:"rzp_test_SW9JPR1httAmNB",
    key_secret:"Y2RZ2CEjRr22ds6VB9OG75nX"
})
app.post('/create-order', async (req,res)=>{
    const amounts=req.body.TotalAmount;
    try{
        const options={
            amount:amounts*100,
            currency:"INR"
        }
        const order= await razorpay.orders.create(options);
        res.json(order);
    }
    catch(err){
        console.log(err.message);
        res.send({msg:"Order not created"})
    }
})



/* import { Strategy as LocalStrategy } from "passport-local";


app.use(passport.initialize())
app.use(passport.session())

passport.use( new LocalStrategy({usernameField:username,passwordField:password},(username,password,done)=>{
    const user=data.find((us)=>us.username===username)
    if(!user){
        done(null,false,{message:"Invalid email name"})

    }
    if(user.password!=password){
        done(null,false,{message:"Invalid password name"})
    }

    return done(null,user);
}))

app.get('/login',(req,res,next)=>{
passport.authenticate("local",(err,user,info)=>{
    if(err) next(err)
        if(!user){
            return res.status(401).json({message:info?.messsage || "Invalid user"})
        }

        req.logIn(user,(err)){
            if(err) next(err);
            return res.json({message:"User validated"  || user})
        }
})
(req,res,next);
})

passport.serializeUser((user,next)=>{
next(null,id)
}
)
passport.deserializeUser((id,next)=>{

const id=data
}) 








/* const login=[
    {
                email:"saravanabava6427@gmail.com",
       password:"Saravana"

    },
    {
         email:"saravanabava2704@gmail.com",
        password:"sara"
       
    },
    {
        email:"aaaaaaaaa@gmail.com",
        password:"hiiiii"
    }
    

]
app.get('/login',(req,res)=>{
    return res.send(login)
})
app.post('/login',(req,res)=>{
    console.log("data gethered");
  const {email,password}=req.body;
const data=login.find((us)=>us.password===password && us.email===email)
if(data){
   return res.json({message:"Login matched"})

}
return res.json({message:"Login Not matched"})

})
 





 

 







 
 */