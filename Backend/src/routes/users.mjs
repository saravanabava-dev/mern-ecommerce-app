import { Router } from "express";

import jwt from "jsonwebtoken";
import { createUserValisdationSchema } from "../util/Validationschema.mjs";
import {validationResult,matchedData,checkSchema} from "express-validator";
import { getUserById}from "../middleware.mjs";
import { Emails } from "../Mongoose/Schema/UserEmail.mjs";
import {data} from '../util/contains.mjs'
import { getUserIndexById } from "../middleware.mjs";
import { signedCookie } from "cookie-parser";
import { User } from "../Mongoose/Schema/user.mjs";
const router=Router();
import { hashPassword } from "../Mongoose/Schema/bcryp.mjs";
import {Address} from  "../Mongoose/Schema/address.mjs"
import { Pickup_Details } from "../Mongoose/Schema/pickup.mjs";
import { authMiddleware } from "../middleware.mjs";

import { validate } from "../util/validate.mjs";

 router.get('/api/my_address/:id', async (req, res) => {
  try {
    const data = await Address.find({
      userId: req.params.id
    });

    res.json(data);
  } catch (err) {
    console.log(err);
    res.send({msg:"User Already Exixts"});
  }
}); 

router.post('/api/my_address',checkSchema(validate), async (req, res) => {
  try {
   const result=validationResult(req);
   console.log(result)
   if(!result.isEmpty()){
    return   res.status(400).json({err:result.array()[0].msg})
   }
    const body=matchedData(req);

    const newAddress = new Address(body);


    await newAddress.save();

    res.json({ msg: "Saved successfully" });

  } catch (err) {
    console.log(err);
return res.send(err.message)
  }
});



router.delete('/api/address_delete/:id',async (req,res)=>{
   const {id}=req.params;
   try{
   await Address.findByIdAndDelete(id);
   res.send({msg:"Adress deleted"})
   }
   catch(err){
      res.send({msg:"Not able to delete"})
   }
})


router.post('/api/pickup', async (req,res)=>{
   const {body}=req;
   let saved=new Pickup_Details(body);
try{
   const Pickup=await saved.save();
   res.send({msg:"PickUp Details are added"})
}
catch(err){
   res.send({msg:"Pickup details are not valid "
   })
}
})


router.post('/api/time', async (req,res)=>{
   const {body}=req;
   const newUser=new User(body);
   try{
      const savedUser= await newUser.save();
      return res.send({msg:"Details Updated"})
   }
   catch(err){
      return res.send({msg:"An Error Occured while uploading"})
   }
})

router.get('/api/address', async (req,res)=>{
   try{
const data=await Address.find();
return res.send(data);
   }
   catch(err){
      res.send({msg:"Details not be retrived"})
   }
})


/* router.get('/api/data',(req,res)=>{
console.log(req.signedCookies)
if(req.signedCookies.user && req.signedCookies.user==="saravana"){
   return res.send(data)
}
 return res.send({msg:"You are not enter the valid cookie value and you are suppose to not allowed "})
})
 */
router.post('/data/update',(req,res)=>{
 
   const {body}=req;
   const newdata={id: data[data.length-1].id+1,...body}
data.push(newdata);
res.send({msg:"User Details updated"})
})



router.post('/api/emails', async (req,res)=>{
   const {body}=req;
const newEmails=new Emails(body);
try{
   const savedEmails=await newEmails.save();
   res.send({msg:"Subscribed"})
}
catch(err){
   return res.send({msg:"Not subscribed"})
}
})


 router.get('/api/data/:id',getUserById,(req,res)=>{

    
    res.cookie("user","saravana",{maxAge:600000,signed:true})
    
    //console.log(req.params)
   const id=req.id;
    const da=data.find((users)=>users.id==id)
    if(da){
          //console.log(da)
        return res.send(da);
      
    }
    res.status(404).send({msg: "THE ID is not Defined"})
 })

router.delete('/api/data/:id',getUserIndexById,(req,res)=>{
    const index=req.userIndex;
   /*  const id=req.params.id;
    const index=data.findIndex((user)=>user.id==id)
    if(index==-1){
        return res.send("Where the index of the user is not find")
    } */
    data.splice(data[index],1);
    res.send("data is deleted particular person id")
 })

  router.patch('/api/data/:id',getUserIndexById,(req,res)=>{
/*  const id=req.params.id;
 const index=data.findIndex((user)=>user.id==id)
 if(index==-1){
    return res.send("Error that the index of usder is not find")
 } 
 const {body}=req;
 */ 
const index=req.userIndex;
const {body}=req;
 data[index]={...data[index],...body};
 return res.send("Where the data is modifies not entire delete")  
 })
  router.put('/api/data/:id',getUserIndexById,(req,res)=>{
//console.log(req)
 /* const id=req.params.id;
 if(isNaN(id)){
    return res.send("Enter the correct index value")
 }
 const index=data.findIndex((user)=>user.id==id)
 if(index==-1){
   return  res.status(404).send("user not found ")
 } */
const id=req.params.id;
const index=req.userIndex;
 const {body}=req;
 data[index]={id:id,...body};
 return res.send("Meassage updated")
 })

  router.post('/api/data',
    checkSchema(createUserValisdationSchema),
   async (req,res)=>{
        const result=validationResult(req);
        console.log("err")
     if(!result.isEmpty()){
            return res.status(400).send({error:result.array()});
            
     }
       
     const body=matchedData(req);
  body.password=hashPassword(body.password);
const newUser= new User(body)

try{
   const savedUser=await newUser.save();
return res.send({message:"User Details Updated"})
}
catch (err) {
  return res.status(500).json({ message: err.message });
}

   })
 
  router.get('/api/data',(req,res)=>{
    // const {query:{filter,value}}=req;
    const {filter,value}=req.query;
     console.log({filter,value});
 if(filter && value){
    return  res.status(200).send(data.filter(((user)=>user[filter].toLowerCase().includes(value))))
 // const fildata=data.filter((user)=>{
 //     user[filter].toLowerCase().includes(value);
 //     return res.send(fildata)
 // })
 }
 res.send(data)
  })
 
  /* app.get('/api/products',(req,res)=>{
     res.send(products);
  }) */
 

export default router