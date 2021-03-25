import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <span>Artificial Intelligence (AI)</span>
                                        <h1>Work smarter, together.</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                        <a href="/contact" className="btn btn-primary">Get Started</a>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-image">
                                        <img src="/images/banner-img1.png" alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-shape">
                    <img src="/images/white-shape.png" alt="image" />
                </div>
                <div className="shape1">
                    <img src="/images/shape/2.png" alt="image" />
                </div>
                <div className="shape2">
                    <img src="/images/shape/3.png" alt="image" />
                </div>
            </div>
            );
    }
}

export default Banner;
