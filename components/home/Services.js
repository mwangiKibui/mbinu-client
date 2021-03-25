import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <section className="services-area ptb-110 bg-fafafa pb-0">
                <div className="container">
                    <div className="section-title">
                        <h2>See wide range of our services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/services/plug.png" alt="image" />
                                </div>
                                <h3><a href="/single-services">Machine Learning</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/services/plug.png" alt="image" />
                                </div>
                                <h3><a href="/single-services">Robotics And Drones</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/services/sensor.png" alt="image" />
                                </div>
                                <h3><a href="/single-services">Image Processing</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/services/database.png" alt="image" />
                                </div>
                                <h3><a href="/single-services">AI For Cloud Services</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/services/augmented-reality.png" alt="image" />
                                </div>
                                <h3><a href="/single-services">Virtual Reality</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <img src="/images/services/deep.png" alt="image" />
                                </div>
                                <h3><a href="/single-services">Deep Learning</a></h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="services-shape">
                    <img src="/images/services-shape.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default Services;
