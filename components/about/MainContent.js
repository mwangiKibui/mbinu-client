import React, { Component } from 'react';

class MainContent extends Component {
    render() {
        return (
            <section className="about-area ptb-110">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span>About Mbinu</span>
                                <p>
                                    <i>Mbinu</i> is a swahili word meaning <b>technique</b>. 
                                    It summarizes our core principle which is show casing different techniques for
                                    the web/mobile architecture.
                                </p>
                                <p>
                                    We blog about front-end, back-end, databases, and public API's. 
                                    We strive to familirialize software developers operating in the above platforms with different existing technologies.
                                </p>
                                <p>
                                    For queries you can always reach us via:
                                </p>
                                <ul>
                                    <li>
                                        <a href="https://twitter.com/itsmkibui">
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:info@mbinu.tech">
                                            Email
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tel:+254704924773">
                                            Phone call
                                        </a>
                                    </li>
                                </ul>
                                <p>
                                    To support our work, feel free to 
                                    <a href="https://www.buymeacoffee.com/itsmkibui"> Buy us coffee </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about.jpg" alt="about-us" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default MainContent;
