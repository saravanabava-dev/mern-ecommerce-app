import React from 'react'
 import  { useEffect, useState } from "react";
import { Navigate, useNavigate,useLocation } from "react-router-dom";
import { useRef } from "react";

function Payment() {

  const handlePayment = async () => {
    const res = await fetch("http://localhost:5174/create-order", {
      method: "POST",
      headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    TotalAmount: TotalAmount
  })

    });

    const data = await res.json();

    const options = {
      key: "rzp_test_SW9JPR1httAmNB",
      amount: data.amount,
      currency: "INR",
      name: "Wrinkle Away",
      description: "Laundry Service Payment",
      order_id: data.id,
      handler: function (response) {
        alert("Payment Successful");
        console.log(response);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };



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




    const location=useLocation();
    
  
  
  
    const Offer =location.state?.Offer||0;
    
   //SON.parse(localStorage.getItem("offer")) || 0;
  
  
    const  TotalAmount=location.state?.TotalAmount;
    //ON.parse(localStorage.getItem("totalAmount"))|| 0;
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
  
  
  
   
    useEffect(()=>{
  const timer= setTimeout(()=>{
   localStorage.removeItem("user")
    setUser(null)
  },60000)
   return ()=>clearTimeout(timer)
    },[])
  
  
  
   
  
    const [showModal, setShowModal] = useState(false);
  
     
      const saved_add=location.state?.saved_address ;
    
      const current_add=location.state?.current_address ;
     
    
  
    
  
  
      useEffect(()=>{
    const timer= setTimeout(()=>{
     localStorage.removeItem("user")
      setUser(null)
    },600000)
     return ()=>clearTimeout(timer)
      },[])
    
    const [tokens,setTokens]=useState(false)
      const [user_coup,setCoup]=useState(null)
      const coupun_data="1234@sara"
    const coupens=()=>{
    if(coupun_data==user_coup){
      toast.success("Coupun Applied")
      setTokens(true);
      setShowModal(false)
    }
    else{
      toast.error("Coupun Not matched")
    }
    }
  
    
    const [prices,setPrices]=useState([]);
    let offer=0;
    useEffect(()=>{
     const data =JSON.parse(localStorage.getItem("price_details"))||[]
     setPrices(data)
    
    },[])
    
    const menAmount=prices[0];
    const womenAmount=prices[1];
    const kidsAmount=prices[2];
    let totalAmount=prices[3]+20;
    
    if(tokens){
      offer=totalAmount*0.10
      totalAmount=totalAmount-offer
      localStorage.setItem("totalAmount",JSON.stringify(totalAmount))
    }
    useEffect(()=>{
      localStorage.setItem("totalAmount",JSON.stringify(totalAmount))
    },[])
  
  
    const deliver=
    JSON.parse(localStorage.getItem("address"))
  
     

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


   <div className=''> 
<div className=' conatiner  m-4 d-flex gap-3   col-md-8 mx-auto '>
  
  {tokens ?   <h3 className='fw-light'>Order </h3>:
  <h3 className='fw-light'>Order</h3>
}
  <h3 className='fw-light'>----------------------- </h3>

<h3 className='fw-light'>Review</h3>
  <h3 className='fw-light'>----------------------- </h3>
  <h3 className='   fw-dark'> Payment</h3>

</div>

<hr></hr>
<div className='container d-flex justify-content-center'>
 {(current_add && current_add !== "undefined-undefined") ? (
  <button className='btn btn-primary rounded-pill text-dark' style={{width:"300px",backgroundColor:"#e9e951"}}>
    Delivery at {current_add}
  </button>
) : (saved_add && saved_add !== "undefined-undefined") ? (
  <button className='btn btn-primary rounded-pill text-dark' style={{width:"300px",backgroundColor:"#e9e951"}}>
    Delivery at {saved_add}
  </button>
) : null}
</div>
</div>
<hr></hr>
<div className='container col-md-7 price '>
< div className=' d-flex flex-column  mt-4  gap-3  ms-5'>
  <h3 className='fw-bold mt-2'>Price details</h3>
  <div className='d-flex'>
  <h4>Men</h4>

  <h5 className='d-flex ' style={{marginLeft:"485px"}}>$ {menAmount} </h5>
    </div>
    <div className='d-flex'>
  <h4>Women</h4>
  <h5 className='d-flex ' style={{marginLeft:"450px"}}>$ {womenAmount} </h5>
  </div>
  <div className='d-flex'>
  <h4>Kids</h4>
   <h5 className='d-flex ' style={{marginLeft:"490px"}}>$ {kidsAmount} </h5>
  
</div>
<div className='d-flex '>
  <h4>Discount Applied </h4>
{Offer?
 <h5  style={{marginLeft:"350px",cursor:"pointer",color:"red"}}>$ -{Offer.toFixed(2)}</h5>:
 <h5  style={{marginLeft:"350px",cursor:"pointer",color:"red"}}>$ -0</h5>
   } 

 {showModal&& (
  <div className="modal-overlay">
    <div className="modal-box">
      <h2>Apply Coupon to get 10% offer</h2>
      <input  className='form-control mt-3' value={user_coup}  onChange={(e)=>setCoup(e.target.value)}type="text" placeholder="Enter coupon code" />
      <div className='d-flex gap-3'>
      <button  className="btn btn-success mt-4" onClick={()=>coupens()}>
        Apply
      </button>

<button  className="btn btn-warning mt-4" onClick={() => setShowModal(false)}>
        Close
      </button>
      </div>
    </div>
  </div>
)}
 
  </div>
  <div className='d-flex'>
  <h4>Platform fee</h4>
  <h5 className='' style={{marginLeft:"405px"}}>$ 20</h5>
  </div>
  <div className='d-flex '>
  <h3 className='fw-bold '>Total Amount </h3>
  <h4 className='fw-bold ' style={{marginLeft:"360px"}}>$ {TotalAmount}</h4>
  </div>
</div> 
</div>

<hr></hr>
<div className='container d-flex justify-content-center  gap-5'>
  <button onClick={()=>{
    navigat('/review',{
    state:{
      current_address:current_add,
      saved_address:saved_add,
      Offer,
      TotalAmount
    }
  }
)
}
  } className='btn  fw-bold rounded-pill but ' style={{width:"300px",backgroundColor:"#e9e951"}}
  > Back to Review </button>
  <button className='btn  fw-bold rounded-pill but ' style={{width:"300px",backgroundColor:"#e9e951"}} >Continue</button>
</div>

  <div className='text-center fw-bold mt-4'>
      <h1 className='text-dark'>Make Payment</h1>
      <div className='d-flex justify-content-center gap-5 m-4'>
        <div>
     <button onClick={handlePayment} className='btn btn-primary '>Razorpay</button>
        </div>
        <div>
<button className='btn btn-dark'>Cash on delivery</button>
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

export default Payment