import React from 'react';
import './style.css';

function Testimonials() {
  return (
    <div className="container my-4">
      {/* First Row */}
      <div className="row my-4">
        <div className="col-lg-4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">"Professional and precise, our accountant ensured every deduction counted, maximizing our returns with ease."
</p>
              </div>
              <div className="flip-card-back">
                <p className="title">- Priya Verma</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">"Exceptional service! Our accountant's insights helped streamline our finances, saving time and resources."</p>
              </div>
              <div className="flip-card-back">
                <p className="title">- Rohan Khanna
</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">"Knowledgeable and reliable, our accountant navigated complex tax laws effortlessly, ensuring compliance at every turn."
</p>
              </div>
              <div className="flip-card-back">
                <p className="title">- Deepika Sharma

</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="row mt-3">
        <div className="col-lg-4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">"Dedicated and detail-oriented, our accountant provided personalized solutions that optimized our financial strategies."</p>
              </div>
              <div className="flip-card-back">
                <p className="title">- Vikram Singhania</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">"Trustworthy and efficient, our accountant's proactive approach ensured our financial records were always in order."</p>
              </div>
              <div className="flip-card-back">
                <p className="title">- Aarav Patel</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className="title">"Responsive and insightful, our accountant's guidance empowered us to make informed financial decisions confidently."</p>
              </div>
              <div className="flip-card-back">
                <p className="title">- Niharika Gupta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
