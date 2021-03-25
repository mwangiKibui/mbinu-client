import React, { Component } from 'react';
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wowjs') : null

export class Features extends Component {

    componentDidMount(){ 
        new WOW.WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 20,
            mobile:       true,
            live:         true,
        }).init();
    }

    render() {
        return (
            <section className="features-area ptb-110 bg-f7f9fc">
                <div className="container">
                    <div className="overview-box">
                        <div className="image wow zoomIn" data-wow-delay="1s">
                            <img src="/images/1.png" alt="image" />
                        </div>

                        <div className="content">
                            <h3>Make your business more competitive and sustainable.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul className="features-list">
                                <li><span><i className='bx bx-check-double'></i> Influencing Sales</span></li>
                                <li><span><i className='bx bx-check-double'></i> Generating Insights</span></li>
                                <li><span><i className='bx bx-check-double'></i> Engaging Customer</span></li>
                                <li><span><i className='bx bx-check-double'></i> Boosting Operations</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="content">
                            <h3>Do what matters and we'll handle the back office routine.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                            <ul className="features-list">
                                <li><span><i className='bx bx-check-double'></i> Fully Support</span></li>
                                <li><span><i className='bx bx-check-double'></i> Reliable & Cost Effective</span></li>
                                <li><span><i className='bx bx-check-double'></i> Dedicated Developers</span></li>
                                <li><span><i className='bx bx-check-double'></i> 100% Customer Satisfaction</span></li>
                            </ul>
                        </div>

                        <div className="image wow zoomIn" data-wow-delay="1s">
                            <img src="/images/2.png" alt="image" />
                        </div>
                    </div>
                </div>

                <div className="rectangle-shape1">
                    <img src="/images/rectangle-shape1.png" alt="image" />
                </div>
                <div className="rectangle-shape2">
                    <img src="/images/rectangle-shape2.png" alt="image" />
                </div>
            </section>
        );
    }
}

export default Features;
