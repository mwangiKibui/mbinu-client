import React, { Component } from 'react';
import Link from 'next/link';

class Blog extends Component {
    render() {
        return (
            <section className="blog-area ptb-110 bg-f9f9f9">
                <div className="container">
                    <div className="section-title">
                        <h2>Our recent story</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 15, 2020</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Making Peace With The Feast Or Famine Of Freelancing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/2.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 18, 2020</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>I Used The Web For A Day On A 50 MB Budget</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    
                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-blog-post">
                                <div className="entry-thumbnail">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog/3.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="entry-post-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li><a href="#">Admin</a></li>
                                            <li>August 15, 2020</li>
                                        </ul>
                                    </div>

                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Here are the 5 most telling signs of micromanagement</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                    
                                    <Link href="/blog-details">
                                        <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
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

export default Blog;
