

import React from 'react'


 import  { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from "react";
function About() {


    const dropdownRef=useRef();
      useEffect(() => {
      function handleClickOutside(e) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
          setOpen(false);
        }
      }
    
      document.addEventListener("mousedown", handleClickOutside);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    
      const navigat=useNavigate();
    
      const[user,setUser]=useState(
    JSON.parse(localStorage.getItem("user"))
      )
      useEffect(()=>{
    const timer= setTimeout(()=>{
     localStorage.removeItem("user")
      setUser(null)
    },60000)
     return ()=>clearTimeout(timer)
      },[])
    
    
    
      const [open, setOpen] = useState(false);
    
      const toggleDropdown = () => setOpen(!open);
  return (
    <div>



         <nav className="navbar navbar-expand-lg  px-4" style={{backgroundColor:"#ffff8a"}}>
      <a className="navbar-brand fw-bold" href="/">Wrinkle Away</a>

      <div className="ms-auto">
        <a className="me-4 nav-link d-inline" href="/">Home</a>
        <a className="nav-link me-4 d-inline " href="/ser" >Services</a>
        <a className="me-4 nav-link d-inline" href="/about">About</a>
 {user?(
<div ref={dropdownRef} style={{ position: "relative", display: "inline-block" }}>


      <img
        src="sss.jpg"
        alt="Profile"
        height={35}
        width={35}
        style={{ borderRadius: "50%", cursor: "pointer" }}
        onClick={toggleDropdown}
      />


      {open && user && (
        <div
          style={{
            position: "absolute",
            top: "50px",
          
            right: "0",
            backgroundColor:"lightgray",
            border: "1px solid #ccc",
            borderRadius: "20px",
            width: "250px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            padding: "10px",
       
          }}
        >
          <p style={{ margin: "2px ", fontWeight: "bold" ,fontSize:"20px"}}>{user.username}</p>
          <p style={{ margin: "2px ", fontSize: "15px" }}>{user.email}</p>
          <button 
            style={{
            
              marginTop: "5px",
              width: "35%",
              padding: "1px",
              borderRadius: "5px",
        border:"none",
              backgroundColor: "#6e6e63",
              color: "#fff",
              cursor: "pointer",

            }} 
            className="but  "
            onClick={() => {
              localStorage.removeItem("user");
              navigat("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>

          )
:(
     <button className="btn btn-primary rounded-pill but" onClick={()=>navigat('/login')} >Login</button>
        )
        }  
      
      </div>
    </nav>


    <div className='text-center' >
        <h2 className='fw-bold text-center mt-4'>The Wrinkle Away Story</h2>
        <h5 className='semi-bold'>India's most demanding on-ironing and aundry service</h5>
    </div>
    <div className='text-center ms-5 me-5 mt-4 '>
        <h5 className='semi-bold'>IronEase was created to simplify daily laundry and ironing routines by offering reliable, affordable, and doorstep services.</h5>
        <h5> With a passion for perfection and the use of technology, the company ensures that every garment  from casual wear to the  </h5>
        <h5>fabrics is handled with care.</h5>
        <h5> Eco-friendly practices and same-day pickup and delivery make the service both sustainable and convenient.</h5>
    </div>
    <div className='container '>
    <div className='d-flex mt-5 gap-4 justify-content-between  '>
        <div className='about-box col-md-6 '>
<h3 className='fw-bold text-center text-light'>Our Mission</h3>
<h5 className='mt-3 text-dark'>“To make every household wrinkle-free and stress-free by bringing professional ironing and laundry solutions within everyone’s reach.”</h5>
        </div>
        <div className='col-md-6 about-box'>
<h3 className='fw-bold text-center text-light'>Our Vision</h3>
<h5 className='mt-3 text-dark'>“To create a world where everyone enjoys and ready to wear clothes without effort by offering seamless and sustainable ironing services at their fingertips.”</h5>
        </div>
    </div>
    </div>
    <div className='mt-4 d-flex flex-column align-items-center '>
        <h3 className='text-center fw-bold'>Making Life Easier, One Press at a Time.</h3>
        <img   src='about2.png ' height={20} width={400} />
    </div>

<div className='container mt-5 '>
    <div className='row align-items-center  '>
<div className='col-md-6'>
<h3 className='fw-semibold'>Quick and Reliable Ironing Services</h3>
<h5 className='mt-3 fw-light'> Say goodbye to wrinkled clothes and long waiting times. With IronEase, you can schedule ironing services with just a tap. Our trained professionals ensure every outfit is perfectly pressed, neatly folded, and delivered right to your doorstep.
</h5>
<button className='btn btn-light border border-2 mt-2 rounded-2 but' style={{backgroundColor:"lightslategray"}}>Services</button>
</div>
<div className='col-md-6'>
    <img   src='about1.png' width={350 } style={{marginLeft:"170px"}}/>
{/* <h3>Eco-Friendly Laundry Solutions</h3>
<h5>We care for your clothes — and the planet. Our eco-conscious laundry process uses gentle detergents and energy-efficient machines to keep your garments fresh and vibrant while reducing environmental impact.
</h5> */}
</div>
</div>
</div>
<div className='container mt-5 '>
    <div className='row align-items-center  '>

<div className='col-md-6'>
    <img   src='about3.png' width={400 } style={{}}/>

</div>
<div className='col-md-6'>
<h3 className='fw-semibold'>Eco-Friendly Laundry Solutions</h3>
<h5 className='mt-3 fw-light'>We care for your clothes  and the planet. Our eco-conscious laundry process uses gentle detergents and energy-efficient machines to keep your garments fresh and vibrant while reducing environmental impact.
</h5> 
<button className='btn btn-light border border-2 mt-2 rounded-2 but' style={{backgroundColor:"lightslategray"}}>FAQs</button>
</div>
</div>
</div>
<div className='container mt-5 '>
    <div className='row align-items-center  '>
<div className='col-md-6'>
<h3 className='fw-semibold'>Professional Care You Can Trust</h3>
<h5 className='mt-3 fw-light'>Your clothes deserve the best. Our team follows fabric-specific care methods to handle every item — from delicate silks to everyday wear with the utmost attention and expertise. Because quality and trust are always in fashion.   </h5>
<button className='btn btn-light border border-2 mt-2 rounded-2 but' style={{backgroundColor:"lightslategray"}}>Contact us</button>
</div>
<div className='col-md-6'>
    <img   src='about4.png' width={430 } style={{marginLeft:"140px"}}/>

</div>
</div>
</div>


<footer className=" text-black py-4 mt-5  gap-5 " style={{backgroundColor:"#FFFF8A"}}>
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
        <input className='form-control rounded-pill mt-1 ' placeholder="Enter Your Email"type='email' style={{backgroundColor:"#ffff8a",borderColor:"black",width:"400px",marginLeft:"40px ",height:"40px"}}></input>
<button className='form-control rounded-pill mt-1 '  style={{backgroundColor:"#ffff8a",borderColor:"black",marginLeft:"10px ",height:"40px",width:"80px"}}>Submit</button>
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
    </div>
  )
}

export default About


