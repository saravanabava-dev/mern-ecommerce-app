import React from "react";

function PromoSection() {
  return (
    <div className="container-fluid promo-section py-5">
      <div className="row align-items-center px-5">
          <div className="col-md-6 text-center">
          <img 
            src='/offf.png'
            alt="Offer"
            className="img-fluid rotate pro_image"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-warning fw-bold">
            DIWALI SPECIAL – 15% OFF ON DRY CLEANING
          </h2>
          <p>Celebrate Diwali with spotless outfits.</p>
          <button className="btn btn-dark but">Promo Code: VIJAYA15</button>
        </div>

      
      </div>
    </div>
  );
}

export default PromoSection;