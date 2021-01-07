import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">How we are Founded</span>
                                <h2>Take your business to the next level</h2>
                                <p>In 2019 we launched this place with the aim to build scalable intelligent mobile applications that
simplify people's lives.</p>
                                <p>We saw a great demand to create mobile apps, that lead to digital transformation.</p>
                                <p>We made our main Concern to have a mix of Quality, value for money, and speed.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-img.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;