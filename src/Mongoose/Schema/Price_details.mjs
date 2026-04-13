/* import mongoose, { Collection } from "mongoose";

const itemSchema = mongoose.Schema({
name:{
  type:mongoose.Schema.Types.String
},
category:{
  type:mongoose.Schema.Types.String
},
price:{
  type:mongoose.Schema.Types.Int32
},
quantity:{
  type:mongoose.Schema.Types.Int32
}

},{Collection:"Items"});

const Items = mongoose.model("Items", itemSchema); 


export default Items;


 */
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  quantity: Number
}, { collection: "Items" }); // ✅ FIX HERE

export default mongoose.model("Items", itemSchema);