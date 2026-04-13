import {Router} from 'express'
import { products } from '../util/contains.mjs';

import { Delivery } from '../Mongoose/Schema/deliver_details.mjs';
import Items from '../Mongoose/Schema/Price_details.mjs';
const routers=Router();

 routers.get('/api',(req,res)=>{
  
req.sessionStore.get(req.session.id,(err,sessionData)=>{
    if(err){
        return res.send("msg:{error ocurred}");
    }
    if(sessionData){
        return res.send(sessionData);
    }
    return res.send("msg: this is root ");
})
})

 routers.get('/api/products',(req,res)=>{
    
    console.log(req.session);
    console.log(req.session.id);
    const {filter,value}=req.query;
    console.log(filter,value);
    if(filter&&value){
        const filda=products.filter(((user)=>user[filter].toLowerCase().includes(value)));
        return res.send(filda);
    }
    res.send("msg:{where enter the correct value or filter attribute name }")
 })

 routers.get('/api/products/:id',(req,res)=>{
    //const id=parseInt(req.params.id);
      req.session.visited=true;
    console.log(req.session.id)
    const id=req.params.id;
     if(isNaN(id)){
         return res.send("Id is not number you entered something")
     }
     console.log(id);
     const par=products.find((user)=>
         user.id==id)
     if(par){
          return res.send(par);
     }
     res.send("msg:{Illegal number the id is not defined}")
  })

routers.post('/deliver', async (req,res)=>{
    const {body}=req;
const saved=new Delivery(body)
try{
    await saved.save();
    return res.status(201).send({msg:"data stored succesfully"})
}
catch(err){
    res.send({msg:"Data Not stored"})
}

})


routers.get('/men_items', async (req,res)=>{
const men_items=await Items.find()
console.log("saaa")
console.log(men_items)
res.send(men_items);
})


routers.put('/men_items/:id', async (req, res) => {
  try {
    const { quantity } = req.body;
    const updatedItem = await Items.findByIdAndUpdate(
      req.params.id,
      { quantity },
      { new: true } 
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating quantity" });
  }
});


export default routers