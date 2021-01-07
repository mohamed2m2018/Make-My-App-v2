import React, { Component } from 'react';
import Link from 'next/link';

class DownloadApp extends Component {
    render() {
        return (
            <section className="app-download-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="app-download-image">
                                <img src="/images/mobile.png" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="app-download-content">
                                <span className="sub-title">Download App</span>
                                <h2>Supporting your customers on the go with our mobile app</h2>

                                <div className="btn-box">
                                    <Link href="#">
                                        <a className="apple-store-btn">
                                            <img src="/images/applestore.png" alt="image" />
                                            Download on the
                                            <span>Apple Store</span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a className="play-store-btn">
                                            <img src="/images/playstore.png" alt="image" />
                                            Get it on
                                            <span>Google Play</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DownloadApp;