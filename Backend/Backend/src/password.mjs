import { text } from "express"
import nodemailer from "nodemailer"

export const setpass= async (too,link)=>{
   const transpoter=nodemailer.createTransport({
    service:"gmail",
    auth:{
user:"saravanabava6427@gmail.com",
pass:"fhwwsmrifzegrido"
    }
   })

await transpoter.sendMail({
    from:"saravanabava6427@gmail.com",
    to:too,
    subject:"Reset the password",
    text:`click the link to reset the password: ${link}`
})
}