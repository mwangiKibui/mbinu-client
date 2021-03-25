import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: true,
    margin: 30,
    navText: [
        "<i class='flaticon-arrow-pointing-to-left'></i>",
        "<i class='flaticon-arrow-pointing-to-right'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        },
    }
}

class Feedback extends Component {

    state = {
        display: false
    };

    componentDidMount(){ 
        this.setState({ display: true });
    }

    render() {
        return (
            <section className="feedback-area">
                <div className="container">
                    <div className="section-title">
                        <h2>Trusted by over 250,000 business owners</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        {this.state.display ? <OwlCarousel 
                            className="feedback-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-feedback-item">
                                <div className="feedback-desc">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>

                                <div className="client-info">
                                    <img src="/images/author1.jpg" alt="image" />
                                    <h3>David Luis</h3>
                                    <span>Founder & CEO</span>
                                </div>
                            </div>

                            <div className="single-feedback-item">
                                <div className="feedback-desc">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>

                                <div className="client-info">
                                    <img src="/images/author2.jpg" alt="image" />
                                    <h3>Steven Smith</h3>
                                    <span>Developer</span>
                                </div>
                            </div>

                            <div className="single-feedback-item">
                                <div className="feedback-desc">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>

                                <div className="client-info">
                                    <img src="/images/author3.jpg" alt="image" />
                                    <h3>Sarah Lucy</h3>
                                    <span>Designer</span>
                                </div>
                            </div>

                            <div className="single-feedback-item">
                                <div className="feedback-desc">
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.</p>
                                </div>

                                <div className="client-info">
                                    <img src="/images/author4.jpg" alt="image" />
                                    <h3>James Anderson</h3>
                                    <span>Manager</span>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </div>

                <div className="feedback-shape">
                    <img src="/images/white-shape2.png" alt="image" />
                </div>
                <div className="shape-rectangle">
                    <img src="/images/1.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default Feedback;
