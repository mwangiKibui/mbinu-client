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
            items: 2,
        },
        576: {
            items: 3,
        },
        768: {
            items: 4,
        },
        1200: {
            items: 6,
        },
    }
}

class Partner extends Component {
    state = {
        display: false
    };

    componentDidMount(){ 
        this.setState({ display: true });
    }

    render() {
        return (
            <div className="partner-area">
                <div className="container">
                    {this.state.display ? <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="single-partner-item">
                            <a href="#" target="_blank"><img src="/images/partner/1.png" alt="image" /></a>
                        </div>

                        <div className="single-partner-item">
                            <a href="#" target="_blank"><img src="/images/partner/2.png" alt="image" /></a>
                        </div>

                        <div className="single-partner-item">
                            <a href="#" target="_blank"><img src="/images/partner/1.png" alt="image" /></a>
                        </div>

                        <div className="single-partner-item">
                            <a href="#" target="_blank"><img src="/images/partner/3.png" alt="image" /></a>
                        </div>

                        <div className="single-partner-item">
                            <a href="#" target="_blank"><img src="/images/partner/4.png" alt="image" /></a>
                        </div>

                        <div className="single-partner-item">
                            <a href="#" target="_blank"><img src="/images/partner/5.png" alt="image" /></a>
                        </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default Partner;
