
import mongoose, { mongo } from "mongoose";

const userEmail=mongoose.Schema({
    Email:{
        type:mongoose.Schema.Types.String
    }
})

export const Emails=mongoose.model("Emails",userEmail)