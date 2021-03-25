import React, { Component } from 'react';
import Loader from '../shared/Loader';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <footer className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                {/* <img src="/images/white-logo.png" alt="image" /> */}
                                                Mbinu
                                            </a>
                                        </Link>
                                    </div>

                                    <ul className="social">
                                        <li><a href="#" target="_blank"><i className="flaticon-facebook-letter-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-twitter-black-shape"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-instagram-logo"></i></a></li>
                                        <li><a href="#" target="_blank"><i className="flaticon-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Quick Links</h3>

                                    <ul className="quick-links-list">
                                        <li>
                                            <Link href="/front-end">
                                            <a>Front-end</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/back-end">
                                            <a>Back-end</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/databases">
                                            <a>Databases</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/apis">
                                            <a>Public APIs</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contacts</h3>

                                    <ul className="footer-contact-list">
                                        <li>
                                            <span>Email:</span> 
                                            <a href="#">info@mbinu.tech</a></li>
                                        <li>
                                            <span>Phone:</span> 
                                            <a href="#">+254 704924773</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <p>Copyright @{currentYear}</p>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="circle-map">
                        <img src="/images/circle-map.png" alt="image" />
                    </div>
                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </footer>
                
                <Loader />
            </React.Fragment>
        );
    }
}

export default Footer;
