import React, { Component } from 'react';
import Link from 'next/link';

class Login extends Component {
    render() {
        return (
            <section className="login-area">
                <div className="row m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="login-image">
                            <img src="/images/login-bg.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 p-0">
                        <div className="login-content">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="login-form">
                                        <div className="logo">
                                            <a href="/">
                                                <img src="/images/logo.png" alt="image" />
                                            </a>
                                        </div>

                                        <h3>Welcome back</h3>
                                        <p>New to Hepro? <Link href="/signup"><a>Sign up</a></Link></p>

                                        <form>
                                            <div className="form-group">
                                                <input type="email" placeholder="Your email address" className="form-control" />
                                            </div>

                                            <div className="form-group">
                                                <input type="password" placeholder="Your password" className="form-control" />
                                            </div>

                                            <button type="submit" className="default-btn">
                                                <i className="bx bxs-hot"></i> 
                                                Login 
                                                <span></span>
                                            </button>
                                            
                                            <div className="forgot-password">
                                                <Link href="#"><a>Forgot Password?</a></Link>
                                            </div>

                                            {/* Connect with social links */}
                                            <div className="connect-with-social">
                                                <Link href="#">
                                                    <a className="facebook">
                                                        <i className='bx bxl-facebook'></i> 
                                                        Connect with Facebook
                                                    </a>
                                                </Link>

                                                <Link href="#">
                                                    <a className="google">
                                                        <i className='bx bxl-google'></i> 
                                                        Connect with Google
                                                    </a>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;