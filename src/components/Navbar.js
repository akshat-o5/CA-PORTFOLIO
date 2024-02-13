









import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <nav className="container navbar navbar-expand-lg navbar-dark bg-dark rounded-2">
            <div className="container-fluid justify-content-center flex-wrap"> {/* Add flex-wrap class */}
                <div className="navbar-brand d-flex align-items-center"> {/* Center the logo */}
                    <Link href="/">
                        <div>
                            <Image src="/ca.png" alt="Logo" width="30" height="25" className="d-inline-block align-text-top" priority={true} />
                        </div>
                        <div>
                            <span style={{ fontFamily: "Italianno", color: 'blue', fontSize: '14px', lineHeight: '18px' }}>CA Anik Gupta</span>
                            <span style={{ fontFamily: "Italianno", color: 'blue', display: 'block', fontSize: '14px', lineHeight: '18px' }}>and Associates</span>
                        </div>
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup"> {/* Center the navbar links */}
                    <div className="navbar-nav">
                        <Link className="nav-link" href="/" style={{ fontFamily: "Italianno" }}>Home</Link>
                        <Link className="nav-link" href="/about" style={{ fontFamily: "Italianno" }}>About</Link>
                        <Link className="nav-link" href="/services" style={{ fontFamily: "Italianno" }}>Services</Link>
                        <Link className="nav-link" href="/testimonials" style={{ fontFamily: "Italianno" }}>Testimonials</Link>
                        <Link className="nav-link" href="/contact" style={{ fontFamily: "Italianno" }}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
