import Link from 'next/link'
import React from 'react'

function services() {
  return (
    <div className="container mt-5">
            <h1 className="text-center mb-4 animate__animated animate__fadeIn animate__delay-1s" style={{ fontFamily: 'Protest Strike', color: '#333' }}>
                <b>Welcome to Our Services</b>
            </h1>
            <p className="text-center mb-5" style={{ fontFamily: 'Protest Strike', fontSize: '1.2em', color: '#666' }}>
                Explore our range of professional services designed to meet your financial needs and drive success.
            </p>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Financial Advisory Services</b></h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Unlock new avenues for growth and prosperity with expert financial planning and investment analysis tailored to your unique goals.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Taxation Consulting</b></h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Navigate the complexities of taxation seamlessly with personalized strategies and expert guidance to optimize your tax obligations.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Audit and Assurance</b></h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Ensure compliance and transparency in your financial operations with thorough audit and assurance services designed to enhance credibility.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
                {/* Repeat the above structure for the remaining services */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Business Valuation</b></h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Gain insights into the true value of your business and make informed decisions with comprehensive business valuation services.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Risk Management Solutions</b></h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Mitigate risks effectively and safeguard your assets with tailored risk management solutions that prioritize your business objectives.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Financial Reporting Services</b></h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Present financial information accurately and transparently with professional financial reporting services that meet regulatory standards.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Corporate Restructuring</b></h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Streamline your business operations and maximize efficiency with strategic corporate restructuring solutions designed for sustainable growth.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Forensic Accounting</b></h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Uncover financial irregularities and prevent fraud with forensic accounting services that employ advanced investigative techniques.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Estate Planning and Wealth</b> Management</h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Secure your legacy and optimize wealth distribution with comprehensive estate planning and wealth management strategies tailored to your needs.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 animate__animated animate__fadeInUp animate__delay-1s">
                        <div className="card-body" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <h5 className="card-title" style={{ fontFamily: 'Protest Strike'}}><b>Compliance and Regulatory Advisory</b></h5>
                            <p className="card-text" style={{ fontFamily: 'Protest Strike'}}>Stay compliant with evolving regulations and mitigate regulatory risks with expert advisory services that ensure adherence to legal frameworks.</p>
                            <button type="button" className="btn btn-primary btn-sm" style={{ fontFamily: 'Protest Strike', backgroundColor: '#007bff', border: 'none' }}>
                                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            Request a Service &#8594;
                                        </Link>
                                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default services