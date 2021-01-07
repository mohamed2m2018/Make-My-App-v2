import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

class ContactFormArea extends Component {
    render() {
        return (
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="contact-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="contact-features-list">
                                    <h3>Some other great reasons to choose us</h3>
                                    <p>Our company is made by group of enthuasiatic youth.</p>
                                    <p>We are a highly trained, dedicated team, helping entrepreneurs, professionals, and small teams streamline success - not just in work, but in life too. We help spare your time to focus on the bigger picture by taking care of the little details.</p>

                                    <ul>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            All our developers hold computer Engineering degree.
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            Quality and speed are the most important factors for us.
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            The right mix of value and money.
                                        </li>
                                        <li>
                                            <i className='bx bx-badge-check'></i> 
                                            Secure payment.
                                        </li>
   
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                {/* Contact Form */}
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <ContactInfo />
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactFormArea;