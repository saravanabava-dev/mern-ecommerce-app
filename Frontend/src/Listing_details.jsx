import React, { useEffect,useRef,useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

function Listing_details() {

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
    
const navigate=useNavigate();

    const menItems = ["Shirt", "Pant", "Jeans", "Dhoti", "Blazer", "Jacket"];
const womenItems = ["Saree", "Frock", "Dress", "Top", "Skirt", "Suit"];
const kidsItems = ["Ballgown", "Empire", "Wrap", "Princess", "Bodycon", "Barbie"];

let menAmount=0;
let womenAmount=0;
let kidsAmount=0;

const menPrice=[12,20,30,22,24,6];
const womenPrice=[30,10,45,15,24,50]
const kidsPrice=[11,2,31,2,27,34];




    const location=useLocation();
   
const men=location.state?.men||[];
    const women=location.state?.women||[]
    const kids=location.state?.kids ||[]

    
    men.forEach((qu,i)=>
      {
        if(qu>0){
       menAmount=menAmount+menPrice[i]*qu;
        }
      }
    )

  women.forEach((qu,i)=>{
    if(qu>0){
      womenAmount=womenAmount+womenPrice[i]*qu;
    }
  })

  kids.forEach((qu,i)=>{
if(qu>0){
  kidsAmount=kidsAmount+kidsPrice[i]*qu;
}
  }
)

let totalAmount=kidsAmount+menAmount+womenAmount;
useEffect(()=>{
  const price_details=[ menAmount,womenAmount,kidsAmount,totalAmount];
localStorage.setItem("price_details",JSON.stringify(price_details));
},[menAmount,womenAmount,kidsAmount,totalAmount])

  return (
    
    <>
      
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
    <div  className='  min-vh-100 d-flex flex-column' /* style={{backgroundColor:"#ffff8a",minHeight:"100vh"}}  */  >
    <div className='container   '>

    
    <h1 className='text-dark  text-center flex-grow-1 m-3 ' style={{fontWeight:"40px",textShadow:"2px 2px 1px white"}}>Selected Items</h1>
{men.some(qu=>qu>0) && 
<div className='mt-3 p-4 rounded rounded-3  'style={{border:"2px solid gray",borderRadius:"10px"}} >
  <div className='d-flex '>
<h3 className='fw-bold text-info'>Category : Men</h3>
<h3 className='ms-auto fw-bold text-info me-4'>Prising details</h3>
</div>
<ul className='mt-3'>
{men.map((qu,i)=>{
    if(qu>0){
return (
  <div className='d-flex'>
<li key={i}> <h5 className='ms-2 ' > {menItems[i]} - {qu}</h5></li>
<div className='ms-auto me-5'>
<h5 className=' me-5  '>$ {menPrice[i]*qu}</h5>
</div>
</div>
)
    }
    return null;
})}
</ul>



<div className='border  bg-light  ms-auto' style={{marginBottom:"10px",width:"220px"}}></div>
<div className='d-flex'>
  <button className='btn btn-dark rounded rounded-pill ms-2 but' onClick={()=>navigate('/price',
    {state:{
        men:men,
        women:women,
        kids:kids
    }}
  )}>Edit</button> 
  
   
  <h5 className='ms-auto  text-success me-4 '>Total Amount - ${menAmount}</h5>
  </div>
</div>
}

{women.some(qu=>qu>0) &&
<div className='mt-4 p-4  rounded rounded-3  ' style={{border:"2px solid gray",borderRadius:"10px"}} >
  <div className='d-flex'>
<h3 className='fw-bold text-info'>Category : Women</h3>
<h3 className='ms-auto fw-bold text-info me-4'>Prising details</h3>
</div>
<ul className='mt-3'>
{women.map((qu,i)=>{
    if(qu>0){
return (
  <div className='d-flex'>
<li  key={i}><h5 className='ms-2'>{womenItems[i]} - {qu}</h5></li>
<div className='ms-auto me-5 '>
<h5 className=' me-5'>$ {womenPrice[i]*qu}</h5>
</div>
</div>
)
    }
    return null;
})}
</ul>
<div className='border  bg-light  ms-auto' style={{marginBottom:"10px",width:"220px"}}></div>
<div className='d-flex '>
  <button className='btn btn-dark rounded rounded-pill ms-2 but' onClick={()=>navigate('/price2',
     {state:{
        men:men,
        women:women,
        kids:kids
    }}
  )}>Edit</button>

  <h5 className='ms-auto text-success me-4'>Total Amount - ${womenAmount}</h5>
</div>
</div>


}
{kids.some(qu=>qu>0) &&
<div className='mt-4 p-4  rounded rounded-3 'style={{border:"2px solid gray",borderRadius:"10px"}} >
<div className='d-flex'>
<h3 className='fw-bold text-info'>category : Kids</h3>
<h3 className='ms-auto fw-bold text-info me-4'>Prising details</h3>
    </div>
<ul className='mt-3'>
    {kids.map((qu,i)=>{
    if(qu>0){
  return  (
    
    <div className='d-flex'>
    <li key={i}><h5 className="ms-2">{kidsItems[i]} - {qu}</h5></li>
    <div className='ms-auto me-5' >
    <h5 className='me-5'>$ {kidsPrice[i]*qu}</h5>
  </div>
    </div>
  )
    }
    return null;
    
})}
</ul>
<div className='border  bg-light  ms-auto' style={{marginBottom:"10px",width:"220px"}}></div>
<div className='d-flex'>
    <button className='btn btn-dark rounded rounded-pill ms-2 but' onClick={()=>navigate('/price4',
     {state:{
        men:men,
        women:women,
        kids:kids
    }}
  )
  }>Edit</button>
  <h5 className='text-success ms-auto me-4 '>Total Amount - ${kidsAmount}</h5>
  </div>

</div>
}
<div className='d-flex '>
<h3 className='text-success ms-auto mt-4 me-1'>Total Amount Purchased - ${totalAmount}</h3>
</div>
<div className='d-flex justify-content-center mt-4 mb-4 mx-center gap-5 '>
<button className='btn btn-primary but' onClick={()=>navigate('/booking')}>Proceed</button>
<button className='btn btn-warning but' onClick={()=>navigate('/price',{
  state:{
    men:men,
    women:women,
    kids:kids
  }
})}>Back</button>
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
    </>
  )
}

export default Listing_details