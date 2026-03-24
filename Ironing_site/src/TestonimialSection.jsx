import React from "react";

function TestimonialsSection() {
  return (
  
      <div className="container py-5 testimonials-section">
      <h2 className="text-center fw-bold mb-4">Testimonials</h2>

      <div className="row ">
        <div className="col-md-6 col-12">
          <div className="card p-4 shadow sss">
            <p>"Amazing service. My clothes are perfectly pressed!"</p>
            <strong>- Customer</strong>
          </div>
        </div>

        <div className="col-md-6 col-12 ">
          <div className="card p-4 shadow sss">
            <p>"Pickup and delivery on time. Great experience!"</p>
            <strong>- Client</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;