import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import ModalVideo from 'react-modal-video';

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    navText: [
        "<i class='bx bx-left-arrow-alt'></i>",
        "<i class='bx bx-right-arrow-alt'></i>"
    ]
}

class MainBanner extends Component {

    _isMounted = false;
    state = {
        display:false,
        isOpen: false,
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                {/* Popup Modal Video If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='jxklQSd8d7I' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            
                <div className="banner-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="banner-content">
                                    <div className="content">
                                        {this.state.display ? <OwlCarousel 
                                        className="banner-content-slides owl-carousel owl-theme"
                                            {...options}
                                        >
                                            <div className="inner-content plr-15">
                                                <h1>Ios and Android Mobile App Development</h1>
                                                <p>Our team will help you transform your idea and solution in the most accessible way in the modern age. Mobile apps are now at the forefont of customer reach and customer acquisition. We develop high-end mobile applications for all the modern platforms.</p>

                                                <Link href="/contact">
                                                    <a className="default-btn">
                                                        <i className="bx bxs-hot"></i> 
                                                        Contact Us 
                                                        <span></span>
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="inner-content plr-15">
                                                <h1>Hosting and cloud solutions</h1>
                                                <p>Whether it's millions of daily page views or for an internal system our hosting solutions will help you cost-effectively serve your product to your audience. Our certified experts will both consult you on or fully manage your infrastructure on the cloud with around the clock support.</p>

                                                <Link href="/contact">
                                                    <a className="default-btn">
                                                        <i className="bx bxs-hot"></i> 
                                                        Contact Us 
                                                        <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </OwlCarousel> : ''}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-md-12">
                                <div className="banner-img banner-video">
                                    <div className="d-table">
                                        <div className="d-table-cell">
                                            <div className="video-box">
                                                <Link href="#play-video">
                                                    <a
                                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                                        className="video-btn popup-youtube"
                                                    > 
                                                        <i className="bx bx-play"></i>
                                                    </a>
                                                </Link>
    
                                                {/* Shape Images */}
                                                <div className="shape1">
                                                    <img src="/images/shape/shape1.png" alt="image" />
                                                </div>
                                                <div className="shape2">
                                                    <img src="/images/shape/shape2.png" alt="image" />
                                                </div>
                                                <div className="shape3">
                                                    <img src="/images/shape/shape3.png" alt="image" />
                                                </div>
                                                <div className="shape4">
                                                    <img src="/images/shape/shape4.png" alt="image" />
                                                </div>
                                                <div className="shape5">
                                                    <img src="/images/shape/shape5.png" alt="image" />
                                                </div>
                                                <div className="shape6">
                                                    <img src="/images/shape/shape6.png" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="shape19">
                        <img src="/images/shape/shape18.png" alt="image" />
                    </div>
                    <div className="shape22">
                        <img src="/images/shape/shape21.png" alt="image" />
                    </div>
                    <div className="shape23">
                        <img src="/images/shape/shape22.svg" alt="image" />
                    </div>
                    <div className="shape24">
                        <img src="/images/shape/shape23.png" alt="image" />
                    </div>
                    <div className="shape25">
                        <img src="/images/shape/shape24.png" alt="image" />
                    </div>
                    <div className="shape26">
                        <img src="/images/shape/shape25.png" alt="image" />
                    </div>
                    <div className="shape20">
                        <img src="/images/shape/shape19.png" alt="image" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default MainBanner;