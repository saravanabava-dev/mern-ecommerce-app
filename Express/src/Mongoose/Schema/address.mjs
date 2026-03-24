import mongoose from "mongoose";



const newDetails=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
ref:"users"
    }
    ,
Name:{
type:mongoose.Schema.Types.String
}
,
phone:{
 type:mongoose.Schema.Types.String

        },
     Address:{
            type:mongoose.Schema.Types.String,
       
            
        }
        
        
})
export const Address=mongoose.model("Address",newDetails);