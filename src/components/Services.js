import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Services() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Title Section */}
                <div className="col-md-6 offset-md-6 mt-3"> {/* Align title to the right */}
                    <div className="p-3">
                        <h2 className="text-uppercase mb-3" style={{ fontFamily: 'Protest Strike', color: '#333' }}><b>Our Services</b></h2>
                        <div className="border-bottom border-primary w-25 mb-3"></div> {/* Design the underline */}
                        <p style={{ fontFamily: 'Arial', color: '#555' }}>Explore our range of services tailored to meet your needs.</p>
                    </div>
                </div>

                {/* First Card */}
                <div className="col-md-6"> {/* Centering the cards */}
                    <div className="card mb-3 mx-5" style={{ maxWidth: '700px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src="/fa.jpg" width='232' height='230' className="img-fluid rounded-start" alt="..."></Image>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Financial Advisory</h5>
                                    <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Engage in strategic financial planning and investment analysis with our expert financial advisory services. Unlock new avenues for growth and prosperity through personalized financial strategies tailored to your unique goals.</p>
                                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                    <button type="button" className="btn btn-primary btn-sm">
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="col-md-6"> {/* Centering the cards */}
                    <div className="card mb-3 mx-5" style={{ maxWidth: '700px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src="/tax.jpg" width='232' height='230' className="img-fluid rounded-start" alt="..."></Image>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Tax Planning and Compliance</h5>
                                    <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Navigate the complexities of tax laws effortlessly with our comprehensive tax planning and compliance services. Minimize tax liabilities while ensuring full compliance, allowing you to focus on what truly matters – your business.</p>
                                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                    <button type="button" className="btn btn-primary btn-sm">
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6"> {/* Centering the cards */}
                    <div className="card mb-3 mx-5" style={{ maxWidth: '700px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src="/management.jpg" width='232' height='230' className="img-fluid rounded-start" alt="..."></Image>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Management Consulting</h5>
                                    <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Empower your organization with strategic insights and actionable recommendations through our dynamic management consulting services. Drive innovation, optimize performance, and achieve sustainable growth with our expert guidance.</p>
                                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                    <button type="button" className="btn btn-primary btn-sm">
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="col-md-6"> {/* Centering the cards */}
                    <div className="card mb-3 mx-5" style={{ maxWidth: '700px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image src="/audit.jpg" width='232' height='230' className="img-fluid rounded-start" alt="..."></Image>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Audit and Assurance</h5>
                                    <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Gain confidence in your financial statements and operational processes with our meticulous audit and assurance services. Let us uncover insights that drive transparency, accountability, and long-term success for your organization.</p>
                                    {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                                    <button type="button" className="btn btn-primary btn-sm">
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-outline-info mt-3 align-self-center mx-5">
                        <Link href="/services" style={{ textDecoration: 'none', color: 'inherit' }}>
                            View More &#8594;
                        </Link>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Services;
