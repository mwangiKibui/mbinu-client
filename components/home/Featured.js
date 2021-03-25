import React, { Component } from 'react';

class Featured extends Component {
    render() {
        return (
            <section className="featured-solutions-area ptb-110">
                <div className="container">
                    <div className="section-title">
                        <h2>Our featured solutions</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-solutions">
                                <img src="/images/solutions/1.png" alt="image" />

                                <h3>Departments</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                <a href="/single-services" className="read-more-btn">Read More <i className="flaticon-add"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-featured-solutions">
                                <img src="/images/solutions/2.png" alt="image" />

                                <h3>Industries</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                <a href="/single-services" className="read-more-btn">Read More <i className="flaticon-add"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-featured-solutions">
                                <img src="/images/solutions/3.png" alt="image" />

                                <h3>Technology</h3>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                                <a href="/single-services" className="read-more-btn">Read More <i className="flaticon-add"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Featured;
