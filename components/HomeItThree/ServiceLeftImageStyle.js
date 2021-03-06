import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class ServiceLeftImageStyle extends Component {
    render() {
        return (
            <section className="services-area bg-left-color bg-left-shape bg-f4f6fc ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <ReactWOW animation='fadeInLeft' delay='0.3s'>
                            <div className="services-image">
                                <div className="image">
                                    <img src="/images/services/service2.png" alt="image" />
                                </div>
                            </div>
                        </ReactWOW>

                        <div className="services-content it-service-content">
                            <div className="content">
                                <div className="icon">
                                    <img src="/images/icon1.png" alt="image" />
                                </div>

                                <h2>Cloud Hosting Services</h2>
                                <p>Don't worry about hosting your app either, we are prepared for all usage cases.</p>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i>  
                                            Cloud Databases
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            Hybrid Cloud
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            Email Servers
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            Website Hosting
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            File Storage
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            Backup Systems
                                        </div>
                                    </div>
                                </div>
                                
                                <Link href="#">
                                    <a className="default-btn">
                                        <i className="bx bxs-spreadsheet"></i> 
                                        Learn More 
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceLeftImageStyle;