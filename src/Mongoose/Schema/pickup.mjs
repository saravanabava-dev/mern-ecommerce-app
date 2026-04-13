import mongoose from "mongoose";

const pickup=mongoose.Schema({
    UserId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User"
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
    }
})


export const Pickup_Details=mongoose.model("Pickup_Details",pickup)