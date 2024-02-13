import React from 'react';
import Image from 'next/image';

function AboutUs() {
    return (
        <section id="about" className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="display-4 mb-4" style={{fontFamily: 'Protest Strike'}}><b>About Us</b></h2>
                        <p className="lead" style={{fontFamily: 'Protest Strike'}}>At CA Anik Gupta and Associates, we are dedicated to providing exceptional financial services tailored to meet the needs of our clients. With a focus on professionalism, integrity, and excellence, we strive to deliver innovative solutions that drive success and create long-lasting relationships.</p>
                        <p style={{fontFamily: 'Protest Strike'}}>We specialize in a wide range of financial services including tax planning, audit and assurance, business advisory, and more. Our team of experienced professionals is committed to delivering personalized and comprehensive solutions that empower our clients to achieve their financial goals.</p>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <Image src="/about.jpg" alt="About Us" width='660' height='450' />
                    </div>
                </div>
            </div>

            <div className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="display-4 mb-4" style={{fontFamily: 'Protest Strike'}}><b>Meet the Founder</b></h2>
                            <p  style={{fontFamily: 'Protest Strike'}}>Mr. Anik Gupta, the esteemed owner of CA Anik Gupta and Associates, brings over 5 years of profound experience in the field of chartered accountancy. With a robust background in finance, taxation, and business advisory, Mr. Gupta has been instrumental in guiding clients towards financial success and stability. His dedication to excellence and commitment to client satisfaction have earned him a stellar reputation in the industry. Leveraging his expertise and strategic insights, Mr. Gupta leads his team with a vision to empower businesses and individuals to achieve their financial goals with confidence and clarity.</p>
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                            <Image src="/phot.jpg" alt="Founder" width='400' height='300' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h3 style={{fontFamily: 'Protest Strike'}}><b>Our Team</b></h3>
                        <p style={{fontFamily: 'Protest Strike'}}>Our team consists of highly skilled and dedicated professionals with expertise in various areas of accounting, finance, and business advisory. With a commitment to continuous learning and professional development, we stay abreast of the latest industry trends and regulations to ensure that our clients receive the highest level of service and support.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
