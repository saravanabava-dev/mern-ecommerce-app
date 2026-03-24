import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom'

function Listing_details() {
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
  return (
    <div  className='  min-vh-100 d-flex flex-column' /* style={{backgroundColor:"#ffff8a",minHeight:"100vh"}}  */  >
    <div className='container   '>

    
    <h1 className='text-primary text-center flex-grow-1 m-3 ' style={{fontWeight:"40px",textShadow:"2px 2px 5px white"}}>Selected Items</h1>
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

    </div>
  )
}

export default Listing_details