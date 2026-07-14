import React from "react";
import { useState,useEffect} from "react";
import axios from "axios";
function ServicesSection() {
  const [Images,setImages]=useState([])
  const ServiceImg=async()=>{


    const res=axios.get(`${import.meta.env.VITE_API_URL}/images`)
    setImages(res.data);

  }
   useEffect(() => {
    ServiceImg();   
  }, []);
  return (
    
    <div className="container py-5" id="services">
      <h2 className="text-center fw-bold mb-5">Our Expert Services</h2>

      <div className="row ">
        {Images.map((image)=>{
  let ime=`http://localhost:5174/${image.Image}`
  return(
  <div className='col-md-4  col-12 g-4'>
<div className='card  sss'>

  <img className='card-img-top ' src={ime} alt='str' style={{ height: "250px", objectFit: "cover" }}/>
  <div className='card-body'>
    <h5 className='text-center fw-bold'>{image.name}</h5>
  </div>
</div>
</div>

  )
        }
  )
}
</div>
</div>
  );
}

export default ServicesSection;