import React, { Component } from 'react';
import ReactWOW from 'react-wow';

class Features extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Amazing Features</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.1s'>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bxl-apple'></i>
                                    </div>
                                    <h3>Ios App</h3>
                                    <p>Apple devices are generating a huge ripple in the marketplace, hence, the increase in mobile application development for iOS devices. Businesses can now increase their brand recognition towards users using iOS devices.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInLeft' delay='0.2s'>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bxl-android'></i>
                                    </div>
                                    <h3>Android App</h3>
                                    <p>The largest platform - where most of your audience probably is. Our apps are intuitive, engaging and scalable, while our engineering is based on agile development methodologies to ensure an efficient and effective collaboration</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.3s'>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bx-conversation'></i>
                                    </div>
                                    <h3>UI/UX Design</h3>
                                    <p>We’ve got a user-centered mobile app design philosophy that guides our every creative move. Our app design department is specialized in decoding the user’s wants and needs, making for well-informed UI and UX decisions.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.4s'>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bxs-dashboard'></i>
                                    </div>
                                    <h3>QA and Testing</h3>
                                    <p>We'll be tapping, swiping and pushing until every last bug is fixed. We'll make sure that your mobile app is in top shape for its app store launch and that it will make good on its promise.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.5s'>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bxs-info-circle'></i>
                                    </div>
                                    <h3>Product Launch Solutions</h3>
                                    <p>The product launch is an essential milestone in the life of a product, yet it only marks the beginning of the startup experience. We’ll make sure your app has is launched successfully on app and play stores.</p>
                                </div>
                            </ReactWOW>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <ReactWOW animation='fadeInRight' delay='0.6s'>
                                <div className="single-features-box">
                                    <div className="icon">
                                        <i className='bx bxs-bell-ring'></i>
                                    </div>
                                    <h3> DIGITAL MARKETING </h3>
                                    <p>The strongest marketing operations are tightly integrated with product teams, enabling seamless coordination between feature development, integration of marketing tools and services.bx-stop-circle</p>
                                </div>
                            </ReactWOW>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;