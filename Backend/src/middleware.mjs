
import {data} from '../src/util/contains.mjs'

import jwt from "jsonwebtoken";
export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).send("No token");

  const token = authHeader.split(" ")[1]; // 🔥 remove "Bearer"

  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};

export const getUserById=(req,res,next)=>{
    const id=req.params.id;
if(isNaN(id)){
return res.send({error:"Enter the valid user index"})
}
req.id=id;
next();

}

export const getUserIndexById=(req,res,next)=>{
    const id=req.params.id;
    if(isNaN(id)){
return res.send({error:"Enter the valid user index"})

}
const userindex=data.findIndex((user)=>user.id==id);
req.userIndex=userindex;
next();
}

/* export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).send("No token");

  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;  
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
}; */