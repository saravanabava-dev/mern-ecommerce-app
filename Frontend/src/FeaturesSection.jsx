import React from "react";

function FeaturesSection() {
  return (
    <div className="container py-5 features-section">
  
      <div className="container text-center">
        <h2 className="fw-bold mb-5">The Place That Fits All Your Needs</h2>

        <div className="row c gap-5 d-flex justify-content-center ">
          <div className="col-md-3 saa">
            <h5>Scheduling</h5>
            <p>Easily schedule pickup.</p>
          </div>
          <div className="col-md-3 saa">
            <h5>Cost less</h5>
            <p>Our service cost is Less.</p>
          </div>
           <div className="col-md-3 saa">
            <h5>Pickup</h5>
            <p>We collect laundry from doorstep.</p>
          </div>
          <div className="col-md-3 saa">
            <h5>Delivery</h5>
            <p>Delivered back on time.</p>
          </div>
             <div className="col-md-3 saa">
            <h5>Client satisfaction</h5>
            <p>Best customer satisfaction </p>
          </div>
            <div className="col-md-3 saa">
            <h5>Professional Service</h5>
            <p>We Ensure the Good service.</p>
          </div>
        </div>
      </div>
      <h2 className="text-center mt-5 fw-bold">About us</h2>
      
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


    </div>
  );
}

export default FeaturesSection;