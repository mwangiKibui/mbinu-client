import React, { Component } from 'react';
import Link from 'next/link';

import Layout from "../components/shared/Layout";
import Meta from "../components/shared/Meta";

export class blog extends Component {
    render() {
        return (
            <Layout>
                <Meta />
                <section className="blog-area ptb-110">
                    <div className="container">
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
                                                <li>August 15, 2019</li>
                                            </ul>
                                        </div>

                                        <h3><a href="#">Making Peace With The Feast Or Famine Of Freelancing</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                        <Link href="#">
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
                                                <li>August 18, 2019</li>
                                            </ul>
                                        </div>

                                        <h3><a href="#">I Used The Web For A Day On A 50 MB Budget</a></h3>
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
                                                <img src="/images/blog/3.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><a href="#">Admin</a></li>
                                                <li>August 15, 2019</li>
                                            </ul>
                                        </div>

                                        <h3><a href="#">Here are the 5 most telling signs of micromanagement</a></h3>
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
                                                <img src="/images/blog/4.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><a href="#">Admin</a></li>
                                                <li>August 15, 2019</li>
                                            </ul>
                                        </div>

                                        <h3><a href="#">Add And Show Image With Size From Elementor Widget</a></h3>
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
                                                <img src="/images/blog/5.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><a href="#">Admin</a></li>
                                                <li>August 18, 2019</li>
                                            </ul>
                                        </div>

                                        <h3><a href="#">How To The Active Menu Based On URL In Next.JS?</a></h3>
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
                                                <img src="/images/blog/6.jpg" alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="entry-post-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><a href="#">Admin</a></li>
                                                <li>August 15, 2019</li>
                                            </ul>
                                        </div>

                                        <h3><a href="#">Instagram Feed Add To Your WordPress Site</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod...</p>
                                        <Link href="/blog-details">
                                            <a className="read-more-btn">Read More <i className="flaticon-add-1"></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="pagination-area">
                                    <a href="#" className="prev page-numbers"><i className="fas fa-angle-double-left"></i></a>
                                    <a href="#" className="page-numbers">1</a>
                                    <span className="page-numbers current" aria-current="page">2</span>
                                    <a href="#" className="page-numbers">3</a>
                                    <a href="#" className="page-numbers">4</a>
                                    <a href="#" className="next page-numbers"><i className="fas fa-angle-double-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                </Layout>
        );
    }
}

export default blog;
