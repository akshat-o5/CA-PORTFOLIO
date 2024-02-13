import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Intro() {
    return (
        <>
        <div className="container">
            <div className="row">
                {/* Image Column */}
                <div className="col-md-6">
                    <Image src="/intro.jpg" width='500' height='500' className="img-fluid" alt="Image"></Image>
                </div>
                {/* Details Column */}
                <div className="col-md-6">
                    <div>
                        {/* About Us Heading */}
                        <h2 className="text-uppercase" style={{ fontFamily: 'Protest Strike', color: '#007bff' }}><b>About Us</b></h2>
                        <div className="border-bottom border-primary w-25 mb-3"></div>
                        {/* About Us Content */}
                        <p style={{ fontFamily: 'Protest Strike', fontSize: '1.12em' }}>
                            Introducing CA Anik Gupta and Associates, a distinguished Chartered Accountant firm founded in 2019.
                            <br />
                            At CA Anik Gupta and Associates, we blend expertise, innovation, and personalized service to meet the financial needs of our clients. With a commitment to excellence and a focus on delivering tailored solutions, we strive to empower businesses and individuals to navigate the complexities of finance and taxation with confidence.
                            <br />
                            Since our inception, we have been dedicated to providing comprehensive accounting, auditing, tax advisory, and consultancy services to a diverse clientele. Our team of seasoned professionals brings extensive experience and profound knowledge to every engagement, ensuring that our clients receive strategic insights and guidance that drive success.
                            <br />
                            At the heart of our practice is a client-centric approach, where we prioritize understanding the unique goals and challenges of each client to deliver solutions that exceed expectations. Whether you are a startup, a growing enterprise, or an established organization, we are committed to being your trusted partner in financial management and compliance.
                            <br />
                            CA Anik Gupta and Associates is more than just a Chartered Accountant firm — we are your strategic ally in achieving financial growth, stability, and prosperity. Partner with us, and let&apos;s embark on a journey of financial success together.
                        </p>
                    </div>
                    {/* Read More Button */}
                    <button type="button" className="btn btn-outline-info mt-3 align-self-center">
                        <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Read More &#8594;
                        </Link>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Intro;
