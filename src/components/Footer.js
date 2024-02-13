import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Address</h5>
            <p>
              1234 Main Street, City, Country
            </p>
          </div>

          <div className="col-lg-6 col-md-12">
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              {/* Left */}
              <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
              {/* Left */}

              {/* Right */}
              <div>
                <Link href="#" passHref>
                  <i className="fab fa-facebook-f me-4 text-reset"></i>
                </Link>
                <Link href="#" passHref>
                  <i className="fab fa-twitter me-4 text-reset"></i>
                </Link>
                <Link href="#" passHref>
                  <i className="fab fa-google me-4 text-reset"></i>
                </Link>
                <Link href="#" passHref>
                  <i className="fab fa-instagram me-4 text-reset"></i>
                </Link>
                <Link href="#" passHref>
                  <i className="fab fa-linkedin me-4 text-reset"></i>
                </Link>
              </div>
              {/* Right */}
            </section>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright: CA Anik Gupta and Associates.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
