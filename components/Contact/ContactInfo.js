import React, { Component } from 'react';
import Link from 'next/link';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info">
                <div className="contact-info-content">
                    <h3>Contact us by Email Address</h3>

                    <h2>
                        <span className="email">contact-us@make-my-app.com</span>
                    </h2>

                    <ul className="social">
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className="bx bxl-twitter"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className="bx bxl-youtube"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className='bx bxl-facebook'></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className="bx bxl-linkedin"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a target="_blank"><i className="bx bxl-instagram"></i></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContactInfo;