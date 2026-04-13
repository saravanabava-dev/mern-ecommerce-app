import axios from 'axios';
import React from 'react'
import {useState,useRef,useEffect } from 'react';
import { useNavigate,useLocation, useAsyncError } from 'react-router-dom';
function Prising() {
    

const location=useLocation();
  const[items,setItems]=useState([]);


useEffect(()=>{
  axios.get("http://localhost:5174/men_items").then(res=>{
const menItems=res.data.filter(i=>i.category=="Men")
console.log(menItems)

setItems(menItems);
  }
  )
},[])

      const men=location.state?.men
  const women=location.state?.women;
  const kids=location.state?.kids

    
const navigate=useNavigate();





const men3=location.state?.data


const[user,setUser]=useState(
JSON.parse(localStorage.getItem("user"))
)

const updates= async(index)=>{
  const newData=[...items];
  newData[index].quantity+=1;
  setItems(newData)
   try {
    await axios.put (`http://localhost:5174/men_items/${newData[index]._id}`, {
      quantity: newData[index].quantity,
    });
  } catch (err) {
    console.error("Failed to update quantity in DB:", err);
  }
}
        
const deletes= async (index)=>{
  const newData=[...items];


  if (newData[index].quantity > 0) 
    newData[index].quantity -= 1;
  
  setItems(newData);

  try {
    await axios.put(`http://localhost:5174/men_items/${newData[index]._id}`, {
      quantity: newData[index].quantity,
    });
  } catch (err) {
    console.error("Failed to update quantity in DB:", err);
  }
}

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
    const [open, setOpen] = useState(false);
            
              const toggleDropdown = () => setOpen(!open);
            
  return (
    <div className='ee'>
        <nav className="navbar navbar-expand-lg  px-4" style={{backgroundColor:"#ffff8a"}} >
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
              navigate("/login");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>

          )
:(
     <button className="btn btn-primary rounded-pill but" onClick={()=>navigate('/login')} >Login</button>
        )
        }  
      
       
       
      </div>
    </nav>
    <div className='container mt-5'>
    
<img  className='rounded img-fluid sss ' src='/unnamed.jpg'  style={{width:"1150px",height:"400px"}}alt='' />

    </div>

    <div className='container mt-4 '>
  <div className='row g-4'>
<div className=' col-md-4 col-12'>
<div className='card h-100 sss '>
  <img   src='/Stream.jpg' className='card-img-top ss'/>
    <div className='card-body ' >
    <h5 className='text-center fw-bold'>Stream Ironing</h5>

  </div>
</div>

</div>
<div className='col-md-4  col-12 g-4'>
<div className='card h-100 sss'>
  <img className='card-img-top ss ' src='/wa.jpg' alt='stream'/>
  <div className='card-body'>
    <h5 className='text-center fw-bold'>Clean Washing</h5>
  </div>
</div>

</div>
<div className='col-md-4 col-12 g-4'>
<div className='card h-100 sss'>
  <img className='card-img-top  ss  ' src='/fol.jpg'/> 
    <div className='card-body'>
    <h5 className='text-center fw-bold '>Wash and Fold</h5>

  </div>
</div>
</div>



 
<div className=' col-md-4 col-12 g-4'>
<div className='card h-100 sss '>
  <img   src='/leather.jpg' className='card-img-top ss '/>
    <div className='card-body'>
    <h5 className='text-center fw-bold '>Leather Cleaning</h5>

  </div>
</div>

</div>
<div className='col-md-4 col-12 g-4'>
<div className='card h-100 sss'>
  <img className='card-img-top ss ' src='/wet.jpg' alt='stream'/>
  <div className='card-body'>
    <h5 className='text-center fw-bold '>Carpet Cleaning</h5>
  </div>
</div>

</div>
<div className='col-md-4 col-12 g-4'>
<div className='card h-100 sss'>
  <img className='card-img-top  ss ' src='/washs.jpg'/> 
    <div className='card-body'>
    <h5 className='text-center fw-bold '>Dry Cleaning</h5>

  </div>
</div>
</div>
    <div className='conatainer mb-5'>
<h2 className='text-center fw-bold mt-4'>Pricing Details</h2>

<div className='d-flex  '>
<div className='fw-semibold d-flex flex-column gap-4 mt-5 cc  ps-5 p-4 ms-1' style={{marginLeft:"150px"}}>
 
    <h2 className='fw-bold mt-2 ps-2 text-primary head' >Our Services</h2>
    <div className=' d-flex flex-column gap-4 mt-2 ' >
   <h5 className='mt-5 s' >Stream Iron</h5>
   
   <h5 className='s ' >Wash and Iron</h5>
   
   <h5 className='s'>Wash and Cleaning </h5>
   <h5 className='s'> Dry Cleaning </h5>
   <h5 className='s'>Wet Cleaning</h5>
   <h5 className='s'>Leather Cleaning</h5>
</div>
</div>
    
    <div className='d-flex flex-column  mt-5 ccc ' >
   <div className='d-flex gap-5 p-3 py-4 mt-2'>
        <h3 className='ms-4 fw-semibold he1 ' >Men</h3>
         <h3 className='ms-4  fw-semibold he' onClick={()=>navigate('/price2',
         {state:
          {men:men1,
            women:women,
            kids:kids
         }}) } >Women</h3>

           <h3 className='ms-4 fw-semibold he ' onClick={()=>navigate('/price4',
            {
              state:{
                men:men1,
            women:women,
            kids:kids
              
              }
            }
           )}>Kids</h3>
           
   </div>
    

    <div className="row fw-semibold border-bottom pb-2  ms-3 justify-content-between">
  <div className="col-4 " >Item</div>
  <div className="col-4 ">Price per Piece</div>
  <div className="col-3 ">men</div>
  </div>
 

 <div className='d-flex '>

  <div className='d-flex flex-column gap-4 mt-4 ms-4'>
    {items.map((item) => (
      <h5 key={item._id} className='fw-semibold'>
        {item.name}
      </h5>
    ))}
  </div>


  <div className='d-flex flex-column gap-4 mt-4 ' style={{marginLeft:"240px"}}>
    {items.map((item) => (
      <h5 key={item._id} className='fw-semibold'>
        ₹{item.price}
      </h5>
    ))}
  </div>


  <div className='d-flex flex-column gap-3 mt-4' style={{marginLeft:"205px"}}>
    {items.map((item, index) => (
      <div 
        key={item._id}
        className="d-flex px-3 py-1 rounded-pill"
        style={{backgroundColor:"#FFFF8A"}}
      >
        <button className="btn btn-light btn-sm rounded-circle" onClick={()=>deletes(index)}>-</button>
        <span className="mx-2 fw-bold">{item.quantity || 0}</span>
        <button className="btn btn-light btn-sm rounded-circle" onClick={()=>updates(index)}>+</button>
      </div>
    ))}
  </div>

</div>
 
    
    </div>
    

    
</div>

  

    </div>
    <div  className='d-flex gap-5 justify-content-center '>
    <button className='btn btn-success but 'onClick={()=>navigate('/selected',{
      state:{
        men:men1,
        women:women,
        kids:kids
      }
    })}> proceed </button>
    <button className='btn btn-danger but' onClick={()=>navigate('/price',{
      state:{
        men:[0,0,0,0,0,0],
        women:women,
        kids:kids
      }
    })}>Reset</button>
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
  

export default Prising