import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class ServiceRightImageStyle extends Component {
    render() {
        return (
            <section className="services-area bg-right-shape ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="services-content it-service-content">
                            <div className="content left-content">
                                <div className="icon">
                                    <img src="/images/icon1.png" alt="image" />
                                </div>

                                <h2>Don't worry about Payment</h2>
                                <p>We use Upwork Direct Contracts which provides escrow system for handling payments.</p>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i>  
                                            We send you a contract.
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            You accept the contract
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            You deposit funds in upwork.
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            You release fund on mileStones completion
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            Upwork offers mediation service if you have any complain.
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="feature-box">
                                            <i className='bx bxs-badge-check'></i> 
                                            you don't have to create an Upwork account to accept and fund contracts.
                                        </div>
                                    </div>
                                </div>

                                <Link href="https://en.wikipedia.org/wiki/Escrow">
                                    <a target="_blank" className="default-btn">
                                        <i className="bx bxs-spreadsheet"></i> 
                                        What's escrow?
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <ReactWOW animation='fadeInRight' delay='0.3s'>
                            <div className="services-image">
                                <div className="image">
                                    <img src="/images/services/service5.png" alt="image" />
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