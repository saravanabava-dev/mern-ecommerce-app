 import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:{
type:mongoose.Schema.Types.String,

    },
    email:{
type:mongoose.Schema.Types.String,
required:true,
unique:true
    },
    password:{
        type:mongoose.Schema.Types.String
        
    },
    googleId:{
        type:mongoose.Schema.Types.String,
        unique:true,
        sparse:true
    },
         resetToken: 
      {
        type:mongoose.Schema.Types.String
      },
  resetTokenExpiry: {
 type:mongoose.Schema.Types.String
  }/*
    email:{
        type:mongoose.Schema.Types.String,
        unique:true,
       sparse:true
    },
    Name:{
        type:mongoose.Schema.Types.String,
        

    },
    phone:{
type:mongoose.Schema.Types.String,
unique:true,
    },
    Address:{
        type:mongoose.Schema.Types.String,
        
    },
    pickup_date:{
        type:mongoose.Schema.Types.String
    },
      pickup_time:{
        type:mongoose.Schema.Types.String
    },
    delivery_date:{
           type:mongoose.Schema.Types.String
    },
    deliver_time:{
           type:mongoose.Schema.Types.String
    },
    notes:{
           type:mongoose.Schema.Types.String
    } */
})

export const User=mongoose.model("User",UserSchema);