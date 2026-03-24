
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function FooterSection() {

  const [Email,setEmail]=useState(null)
  const handler= async ()=>{
const res= await axios.post("http://localhost:5174/api/emails",{Email})
alert("Email Subscribed");
  }
  return (
   

       <footer className=" text-black py-4 mt-5  gap-5" style={{backgroundColor:"#FFFF8A"}}>
    <div className='d-flex'>
      <div className=" ms-5 d-flex flex-column ">
        <h2 className='fw-bold'>Stay Connected and </h2>
        <h2 className='fw-bold'>  Stay Updated</h2>
<h4 className='mt-3' > <i class="bi bi-bluesky"></i>Wrinkler Away</h4>
  
<div className='d-flex ms-1 gap-2'>
 
<i class="bi bi-instagram"></i>
<i class="bi bi-facebook"></i>
<i class="bi bi-twitter-x"></i>
<i class="bi bi-whatsapp"></i>
</div>

      <p className='mt-2'>Seamless transactions, personalized insights</p>
        <p>© 2025 All rights reserved</p>
      </div>

          <div className=' d-flex flex-column gap-2 mt-3 mx-auto'>
            <div>
        <h4 className='ms-5 fw-bold'>Get our news and updates</h4>
   <div className='d-flex gap-3'>
        <input className='form-control rounded-pill mt-1 ' value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email"type='email' style={{backgroundColor:"#ffff8a",borderColor:"black",width:"400px",marginLeft:"40px ",height:"40px"}}></input>
<button className='form-control rounded-pill mt-1 '  style={{borderColor:"black",marginLeft:"10px ",height:"40px",width:"80px"}} onClick={handler} >Submit</button>
 </div>
 <div className='d-flex mt-5 gap-5 '>
     <div className='d-flex flex-column gap-1 ms-5'>
        <h5 className='fw-semibold '>Help</h5>
        <p>contact</p>
        <p>FAQs</p>
      </div>
      <div className='d-flex flex-column gap-1 ms-4'>
<h5 className='fw-semibold '>Services</h5>
<p >Home</p>
<p>services</p>
      </div>
      <div className='d-flex flex-column  ms-3'>
<h5 className='fw-semibold '>Company</h5>
<p className=''>About us</p>
<p className=''>contact us</p>
</div>
<div className='d-flex flex-column ms-3'>
<h5 className='fw-semibold'>Address</h5>
<p className='m-0'>17,Anna Nagar</p>
<p>coimbatore</p>
</div>
  </div>
</div>
      </div>

    </div>
    
    </footer>
  );
}

export default FooterSection;