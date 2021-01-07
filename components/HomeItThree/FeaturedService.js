import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import Link from 'next/link';

class FeaturedService extends Component {
    render() {
        return (
            <div className="features-card-section pt-100 pb-70 bg-f8fbfa">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='0.1s'>
                                <div className="single-features-card text-center rounded">
                                    <i className='bx bx-conversation rounded'></i>
                                    <h3>
                                        <Link href="#">
                                            <a>Get your app quickly</a>
                                        </Link>
                                    </h3>
                                    <p>Get your app up and running in 3 months.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='0.2s'>
                                <div className="single-features-card text-center rounded">
                                    <i className='bx bx-laptop rounded'></i>
                                    <h3>
                                        <Link href="#">
                                            <a>Best Quality</a>
                                        </Link>
                                    </h3>
                                    <p>You can be sure that we have tested the app throughly.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <ReactWOW animation='fadeInUp' delay='0.3s'>
                                <div className="single-features-card text-center rounded">
                                    <i className='bx bxs-badge-check rounded'></i>
                                    <h3>
                                        <Link href="#">
                                            <a>Best user Experience</a>
                                        </Link>
                                    </h3>
                                    <p>We make your app with an eye on the customer experience.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-3 col-sm-6 ">
                            <ReactWOW animation='fadeInUp' delay='0.1s'>
                                <div className="single-features-card text-center rounded">
                                    <i className='bx bxs-megaphone rounded'></i>
                                    <h3>
                                        <Link href="#">
                                            <a>Clean code</a>
                                        </Link>
                                    </h3>
                                    <p>We write clean code, that will make maintanance easy.</p>
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