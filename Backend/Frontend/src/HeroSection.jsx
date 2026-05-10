 import React from "react";

function HeroSection() {
  return (


    <div className="container-fluid hero-section py-5 mt-4" >
      <div className="row align-items-center px-5 ">
        <div className="col-md-6 ">
          <h1 className="fw-bold">From wrinkles to wow..</h1>
          <p>
            We handle your clothes with love and precision.
            Experience the power of perfect ironing.
          </p>

          <div className="d-flex  gap-5 mt-4">
            <div>
              <h4>18k+</h4>
              <small>Happy Customers</small>
            </div>
            <div>
              <h4>10+</h4>
              <small>Years of Experience</small>
            </div>
          </div>
        </div>

        <div className="col-md-6 text-center d-flex ms-auto  " >
          <img  
            src='./promos.jpg'
            alt="Clothes"  
            
            className=" img-fluid  rounded-circle  mx-auto" />    
        </div>
      </div>
    </div>
  );
}

export default HeroSection; 