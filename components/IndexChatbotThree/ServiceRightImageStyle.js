import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import Link from 'next/link';

class ServiceRightImageStyle extends Component {
    render() {
        return (
            <section className="services-area bg-right-color ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="services-content">
                            <div className="content left-content">
                                <div className="icon">
                                    <img src="/images/icon1.png" alt="image" />
                                </div>

                                <h2>Path is here for faster way of connections with your customers</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                
                                <Link href="#">
                                    <a className="default-btn">
                                        <i className="bx bxs-spreadsheet"></i> 
                                        Learn More 
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <ReactWOW animation='fadeInRight' delay='0.3s'>
                            <div className="services-image">
                                <div className="image">
                                    <img src="/images/services/chat.png" alt="image" />
                                </div>
                            </div>
                        </ReactWOW>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceRightImageStyle;