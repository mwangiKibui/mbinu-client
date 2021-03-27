import React from 'react';
import Link from "next/link";

const BlogDetails = ({post}) => {
        return (
                <div className="blog-details-area ptb-110">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 col-md-12">
                                <div className="blog-details">

                                    <div className="article-content">
                                        <div className="entry-meta">
                                            <ul>
                                                <li><i className="far fa-calendar-alt"></i>
                                                {new Date(post.date).toDateString()}
                                                </li>
                                            </ul>
                                        </div>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                        <blockquote className="wp-block-quote">
                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                            <cite>Tom Cruise</cite>
                                        </blockquote>

                                        <p>Equidem impedit officiis quo te. Illud partem sententiae mel eu, euripidis urbanitas et sit. Mediocrem reprimique an vim, veniam tibique omittantur duo ut, agam graeci in vim. Quot appetere patrioque te mea, animal aliquip te pri. Ad vis animal ceteros percipitur, eos tollit civibus percipitur no.</p>

                                        <ul className="wp-block-gallery columns-3">
                                            <li className="blocks-gallery-item">
                                                <figure>
                                                    <img src="/images/blog/2.jpg" alt="image" />
                                                </figure>
                                            </li>

                                            <li className="blocks-gallery-item">
                                                <figure>
                                                    <img src="/images/blog/3.jpg" alt="image" />
                                                </figure>
                                            </li>

                                            <li className="blocks-gallery-item">
                                                <figure>
                                                    <img src="/images/blog/4.jpg" alt="image" />
                                                </figure>
                                            </li>
                                        </ul>

                                        <h3>10 Tactics for marketing your company</h3>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>

                                        <ul className="article-features-list">
                                            <li>Devices can grind down to a halt.</li>
                                            <li>Small companies Reairing business.</li>
                                            <li>Repairs are competitive with anyone</li>
                                            <li>Repair broken buttons, speakers</li>
                                            <li>Repairs are competitive with anyone</li>
                                        </ul>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took.</p>

                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>

                                    <div className="article-support">

                                        <h6>
                                            You can support our work by                                             
                                        </h6>

                                        <a target="_blank" href="https://www.buymeacoffee.com/itsmkibui">
                                            buying us a coffee
                                        </a>
                                        
                                    </div>

                                    <div className="article-footer">
                                        <div className="article-tags">
                                            <span><i className="fas fa-bookmark"></i></span>
                                            
                                            <Link href={`/categories/${post.category}`}>
                                            <a>{post.category[0].toUpperCase()+post.category.slice(1)}</a>
                                            </Link>

                                        </div>

                                        <div className="article-share">
                                            <ul className="social">
                                                <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

        );
}

export default BlogDetails;
