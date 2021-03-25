import React, { Component } from 'react';

import Layout from "../components/shared/Layout";
import Meta from "../components/shared/Meta";

class Contact extends Component {
    render() {
        return (
            <Layout>

                <Meta 
                title="Contact"
                description="Ways to reach us on Mbinu"
                />
                <section className="contact-area ptb-110">
                    <div className="container">
                        <div className="section-title">
                            <h2>Drop us Message for any Query</h2>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="contact-image">
                                    <img src="/images/contact.png" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="contact-form">
                                    <form id="contactForm">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" required={true} data-error="Please enter your name" placeholder="Name" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control" required={true} data-error="Please enter your email" placeholder="Email" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="phone_number" id="phone_number" required={true} data-error="Please enter your number" className="form-control" placeholder="Phone" />
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="msg_subject" id="msg_subject" className="form-control" required={true} data-error="Please enter your subject" placeholder="Subject" />
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <div className="form-group">
                                                    <textarea name="message" className="form-control" id="message" cols="30" rows="5" required={true} data-error="Write your message" placeholder="Your Message" />
                                                    <div className="help-block with-errors"></div>
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="btn btn-primary">Send Message</button>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className='bx bx-envelope'></i>
                                    </div>

                                    <h3>Email Here</h3>
                                    <p><a href="mailto:admin@opstar.com">admin@opstar.com</a></p>
                                    <p><a href="mailto:info@opstar.com">info@opstar.com</a></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className='bx bx-map'></i>
                                    </div>

                                    <h3>Location Here</h3>
                                    <p>2750 Quadra Street Victoria, <br /> New York, Canada</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className='bx bx-phone-call'></i>
                                    </div>

                                    <h3>Call Here</h3>
                                    <p><a href="tel:1234567890">+123 456 7890</a></p>
                                    <p><a href="tel:2414524526">+241 452 4526</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                </Layout>
        );
    }
}

export default Contact;
