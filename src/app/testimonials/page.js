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
                <p className="title">&ldquo;Professional and precise, our accountant ensured every deduction counted, maximizing our returns with ease.&ldquo;
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
                <p className="title">&ldquo;Exceptional service! Our accountant&apos;s insights helped streamline our finances, saving time and resources.&ldquo;</p>
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
                <p className="title">&ldquo;Knowledgeable and reliable, our accountant navigated complex tax laws effortlessly, ensuring compliance at every turn.&ldquo;
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
                <p className="title">&ldquo;Dedicated and detail-oriented, our accountant provided personalized solutions that optimized our financial strategies.&ldquo;</p>
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
                <p className="title">&ldquo;Trustworthy and efficient, our accountant&apos;s proactive approach ensured our financial records were always in order.&ldquo;</p>
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
                <p className="title">&ldquo;Responsive and insightful, our accountant&apos;s guidance empowered us to make informed financial decisions confidently.&ldquo;</p>
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
