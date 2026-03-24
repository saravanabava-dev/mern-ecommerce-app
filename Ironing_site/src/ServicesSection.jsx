import React from "react";

function ServicesSection() {
  return (
    <div className="container py-5" id="services">
      <h2 className="text-center fw-bold mb-5">Our Expert Services</h2>

      <div className="row ">
        <div className="col-md-4 mb-4 h-100 " >
          <div className="card sss ">
            <img src='./OIP.jpg' className="card-img-top service-img" alt="Steam" />
            <div className="card-body">
              <h5>Steam Iron</h5>
              <p>Get perfectly pressed clothes every time.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4 h-100 ">
          <div className="card  sss"> 
            <img src="./folds.jpg" className="card-img-top service-img" alt="Wash" />
            <div className="card-body">
              <h5>Wash & Iron</h5>
              <p>Freshly washed and perfectly ironed clothes.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4 h-100 ss">
          <div className="card  sss">
        <img src='./wash.jpg'  className="card-img-top service-img" alt="Fold" />
            <div className="card-body">
              <h5>Wash & Fold</h5>
              <p>Clean, soft and folded laundry.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;

