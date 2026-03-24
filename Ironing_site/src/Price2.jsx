import React from 'react'
import { useState,useRef,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Price2() {

  const location=useLocation();
  const men=location.state?.men||[0,0,0,0,0,0]
  const women=location.state?.women ||[0,0,0,0,0,0]
  const kids=location.state?.kids ||[0,0,0,0,0,0]




  useEffect(() => {
  const w = location.state?.women || [0,0,0,0,0,0];

  setVaalue1(w[0]);
  setVaalue2(w[1]);
  setVaalue3(w[2]);
  setVaalue4(w[3]);
  setVaalue5(w[4]);
  setVaalue6(w[5]);

}, [location.key]);
  /* useEffect(()=>{
    
    if(women){
      setVaalue1(women[0])
           setVaalue2(women[1])

                setVaalue3(women[2])
                     setVaalue4(women[3])
                          setVaalue5(women[4])
                               setVaalue6(women[5])

      

    }
  },[women]) */
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
      const[value1,setVaalue1]=useState(women[0]||0);
       const[value2,setVaalue2]=useState( women[1]||0);
     const[value3,setVaalue3]=useState(women[2] ||0);
     const[value4,setVaalue4]=useState(women[3]||0);
     const[value5,setVaalue5]=useState(women[4]||0);
    
        const[value6,setVaalue6]=useState(women[5]||0);
       const women2=[value1,value2,value3,value4,value5,value6]
    const navigate=useNavigate();
    
        const[user,setUser]=useState(
          JSON.parse(localStorage.getItem("user"))
        )
  
    const update1=()=>{
      
      setVaalue1(value1+1);
    }
    const deleter1=()=>{
      if(0<value1){
    setVaalue1(value1-1)
      }
    }
    const updater2=()=>{
      
      setVaalue2(value2+1);
    }
    const deleter2=()=>{
      if(0<value2){
    setVaalue2(value2-1)
      }
    }
    const updater3=()=>{
      
      setVaalue3(value3+1);
    }
    const deleter3=()=>{
      if(0<value3){
    setVaalue3(value3-1)
      }
    }
    const updater4=()=>{
      
      setVaalue4(value4+1);
    }
    const deleter4=()=>{
      if(0<value4){
    setVaalue4(value4-1)
      }
    }
    
    const updater5=()=>{
      
      setVaalue5(value5+1);
    }
    
    const deleter5=()=>{
      if(0<value5){
    setVaalue5(value5-1)
      }
    }
    
    const update6=()=>{
      
      setVaalue6(value6+1);
    }
    
    const deleter6=()=>{
      if(0<value6){
    setVaalue6(value6-1)
      }
    }
        
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
    <div className='mt-2 d-flex flex-column gap-4'>
   <h5 className='mt-5  s'>Stream Iron</h5>
   
   <h5 className='s' >Wash and Iron</h5>
   
   <h5 className='s'>Wash and Cleaning </h5>
   <h5 className='s'> Dry Cleaning </h5>
   <h5 className='s'>Wet Cleaning</h5>
   <h5 className='s'>Leather Cleaning</h5>
</div>
</div>
    
    <div className='d-flex flex-column  mt-5 ccc ' >
   <div className='d-flex gap-5 p-3 py-4 mt-2'>
        <h3 className='ms-4 fw-semibold he' onClick={()=>navigate('/price',{
          state:{
            men:men,
            women:women2,
            kids:kids
           
          }
        })}>Men</h3>
         <h3 className='ms-4  fw-semibold he1'>Women</h3>

           <h3 className='ms-4 fw-semibold he ' onClick={()=>navigate('/price4',{
           state:{
           men:men,
            women:women2,
            kids:kids
           }
           })}>Kids</h3>

   </div>
    

    <div className="row fw-semibold border-bottom pb-2  ms-3 justify-content-between">
  <div className="col-4 " >Item</div>
  <div className="col-4 ">Price per Piece</div>
  <div className="col-3 ">Quantity</div>
  </div>
  <div className='d-flex'>
  <div className='d-flex flex-column gap-4 mt-4 ms-1'>

        <h5 className='ms-4 fw-semibold me-4'>Saree</h5>
                <h5 className='ms-4 fw-semibold '>Froks</h5>
                <h5 className='ms-4 fw-semibold '>Rampers</h5>
                         <h5 className='ms-4 fw-semibold '>T-shirt Dresses </h5>
                 <h5 className='ms-4 fw-semibold '>Cocktail dress </h5>
                  <h5 className='ms-4 fw-semibold '>Shirt and pant</h5>
                  

  </div>
   <div className=' d-flex flex-column gap-4 mt-4'  style={{marginLeft:"185px"}}>  

        <h5 className='ms-4 fw-semibold me-4'>$30</h5>
                <h5 className='ms-4 fw-semibold '>$10</h5>
                <h5 className='ms-4 fw-semibold '>$45</h5>
                         <h5 className='ms-4 fw-semibold '>$15</h5>
                 <h5 className='ms-4 fw-semibold '>$24</h5>
                  <h5 className='ms-4 fw-semibold '>$50</h5>
                  

  </div>
   <div className=' d-flex flex-column gap-3 mt-4  ' style={{marginLeft:"200px"}}>
    <div className="d-flex  px-3 py-1 rounded-pill quantity " style={{backgroundColor:"#FFFF8A"}}>
  <button className="btn btn-light btn-sm rounded-circle" onClick={deleter1}>-</button>
  <span className="mx-2 fw-bold">{value1}</span>
  <button className="btn btn-light btn-sm rounded-circle" onClick={update1}>+</button>
</div>

<div className="d-flex px-3 py-1 rounded-pill quantity "  style={{backgroundColor:"#FFFF8A"}}>
  <button className="btn btn-light btn-sm rounded-circle"onClick={deleter2}>-</button>
  <span className="mx-2 fw-bold">{value2}</span>
  <button className="btn btn-light btn-sm rounded-circle"  onClick={updater2}>+</button>
</div>

<div className="d-flex  px-3 py-1 rounded-pill quantity "  style={{backgroundColor:"#FFFF8A"}}>
  <button className="btn btn-light btn-sm rounded-circle"onClick={deleter3}>-</button>
  <span className="mx-2 fw-bold">{value3}</span>
  <button className="btn btn-light btn-sm rounded-circle"  onClick={updater3}>+</button>
</div>

<div className="d-flex  px-3 py-1 rounded-pill quantity "  style={{backgroundColor:"#FFFF8A"}}>
  <button className="btn btn-light btn-sm rounded-circle"onClick={deleter4}>-</button>
  <span className="mx-2 fw-bold">{value4}</span>
  <button className="btn btn-light btn-sm rounded-circle"  onClick={updater4}>+</button>
</div>

<div className="d-flex px-3 py-1 rounded-pill quantity "  style={{backgroundColor:"#FFFF8A"}}>
  <button className="btn btn-light btn-sm rounded-circle"onClick={deleter5}>-</button>
  <span className="mx-2 fw-bold">{value5}</span>
  <button className="btn btn-light btn-sm rounded-circle"  onClick={updater5}>+</button>
</div>

<div className="d-flex   px-3 py-1 rounded-pill quantity "  style={{backgroundColor:"#FFFF8A"}}>
  <button className="btn btn-light btn-sm rounded-circle"onClick={deleter6}>-</button>
  <span className="mx-2 fw-bold">{value6}</span>
  <button className="btn btn-light btn-sm rounded-circle"  onClick={update6}>+</button>
</div>

    
        
                  

  </div>
  </div>
</div>
   

    
    
    </div>
    

    
</div>



    </div>
    <div  className='d-flex gap-5 justify-content-center '>
    <button className='btn btn-success but' onClick={()=>navigate('/selected',{
      state:{
        men:men,
        women:women2,
        kids:kids
      }
    })}> proceed </button>
    <button className='btn btn-danger but' onClick={()=>navigate('/price2',{state:{
      mem:men,
      women:[0,0,0,0,0,0],
      kids:kids
    }})}> Reset</button>
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

export default Price2