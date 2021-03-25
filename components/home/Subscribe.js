import React, { Component } from 'react';

class Subscribe extends Component {
    render() {
        return (
            <section className="subscribe-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="newsletter-content">
                                <h2>Signup to the free newsletter</h2>

                                <form className="newsletter-form" data-toggle="validator">
                                    <input type="email" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" required={true} autoComplete="off" />
                                    <button type="submit">Subscribe <i className="flaticon-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="subscribe-contact-info">
                                <img src="/images/woman.png" alt="image" />

                                <div className="content">
                                    <h2>Have any questions?</h2>
                                    <span>Call: <a href="tel:+440458954">+440458954</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Subscribe;
