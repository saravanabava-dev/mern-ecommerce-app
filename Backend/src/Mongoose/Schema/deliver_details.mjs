import mongoose from "mongoose";

const Saved_Deleiver=mongoose.Schema({

    User_id:{
type:mongoose.Schema.Types.ObjectId,
required:true
    },
    
Men:{
    type:mongoose.Schema.Types.Int32,

},
Women:{
    type:mongoose.Schema.Types.Int32
},
Kids:{
    type:mongoose.Schema.Types.Int32,

},
TotalAmount:{
    type:mongoose.Schema.Types.Int32,

},
Pickup_Details:{
        type:mongoose.Schema.Types.String
    },
    Delivery_Details:{
        type:mongoose.Schema.Types.String
    },
Address:{
type:mongoose.Schema.Types.String
}
})

export const Delivery=mongoose.model("Delivery",Saved_Deleiver);