import React from 'react';

import Layout from "../components/shared/Layout";
import Meta from "../components/shared/Meta";
import Banner from "../components/shared/Banner";
import BlogCard from "../components/shared/BlogCard";
import data from "../store/data/blogs";

const Blog = () => {
    return (
        <Layout>
            <Meta />
            <Banner blog={data[0]}/>
            <section className="blog-area ptb-110">
                <div className="container">
                    <div className="row">
                        
                        {
                            data.map((blog,i) => (
                                <div className="col-12 col-sm-12 col-lg-12 " key={i}>
                                    <BlogCard data={blog}/>
                                    </div>
                            ))
                        }                            
                        
                    </div>
                </div>
            </section>
        </Layout>
    );
};
export default Blog;