import React, { Component } from 'react';
import Link from 'next/link';

class BlogPostStyleTwo extends Component {
    render() {
        return (
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Latest News</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog4.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 14, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>50 world-changing people, We lost in the 2010s</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src="/images/author/author4.jpg" alt="image" />
                                            <h6>Sarah Taylor</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link href="/blog-details">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog5.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 16, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Don't buy a tech gift until you read these rules</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src="/images/author/author5.jpg" alt="image" />
                                            <h6>Michel John</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link href="/blog-details">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/blog6.jpg" alt="image" />
                                        </a>
                                    </Link>

                                    <div className="date">
                                        <i className='bx bx-calendar'></i> Feb 18, 2020
                                    </div>
                                </div>

                                <div className="post-content">
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The golden rule of buying a phone as a gift</a>
                                        </Link>
                                    </h3>

                                    <div className="post-info">
                                        <div className="post-by">
                                            <img src="/images/author/author6.jpg" alt="image" />
                                            <h6>Lucy Eva</h6>
                                        </div>

                                        <div className="details-btn">
                                            <Link href="/blog-details">
                                                <a>
                                                    <i className="bx bx-right-arrow-alt"></i>
                                                </a>
                                            </Link>
                                        </div>
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

export default BlogPostStyleTwo;