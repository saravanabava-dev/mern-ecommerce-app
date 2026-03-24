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
      
    </div>
  );
}

export default FeaturesSection;