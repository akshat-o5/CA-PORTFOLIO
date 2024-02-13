import Link from 'next/link'
import React from 'react'

function Outro() {
    return (
        <div className='container'>
            <div class="card text-center">

                <div class="card-body" style={{ backgroundColor: '#c9aae7' }}>
                    <h5 class="card-title" style={{ fontFamily: 'Protest Strike' }}><b>It's not over yet.</b></h5>
                    <p class="card-text">Thank you for visiting our website and exploring the range of services we offer. Whether you're seeking professional assistance, <b>looking to schedule an appointment</b>, or simply <b>have questions about financial matters</b>, we're here to help. Our dedicated team is committed to providing personalized solutions tailored to your unique needs. Feel free to reach out to us to <b>request a service</b>, book an appointment, clarify any doubts, or simply <b>connect with us</b>. Your financial well-being is our top priority, and we look forward to the opportunity to support you on your journey towards financial success.</p>
                    <button type="button" class="btn btn-outline-primary">
                        <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                            Go&#8594;
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Outro