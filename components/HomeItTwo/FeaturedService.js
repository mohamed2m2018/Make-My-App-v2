import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class FeaturedService extends Component {
    render() {
        return (
            <div className="features-card-section pt-100 pb-70 bg-f8fbfa">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='0.2s'>
                                <div className="single-features-card blt-radius-0">
                                    <i className='bx bx-conversation blt-radius-0'></i>
                                    <h3>
                                        <Link href="#">
                                            <a>IT Consultancy</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='0.3s'>
                                <div className="single-features-card blt-radius-0">
                                    <i className='bx bx-laptop blt-radius-0'></i>
                                    <h3>
                                        <a href="#">Web Development</a>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='0.4s'>
                                <div className="single-features-card blt-radius-0">
                                    <i className='bx bxs-badge-check blt-radius-0'></i>
                                    <h3>
                                        <Link href="#">
                                            <a>IT Solutions</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='0.5s'>
                                <div className="single-features-card blt-radius-0">
                                    <i className='bx bxs-megaphone blt-radius-0'></i>
                                    <h3>
                                        <Link href="#">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua.</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedService;