import {useRouter} from "next/router";
import data from "../../store/data/blogs";
import Layout from "../../components/shared/Layout";
import Meta from "../../components/shared/Meta";
import Banner from "../../components/shared/Banner";
import BlogCard from "../../components/shared/BlogCard";

function CategoryPage({blogs,category}){

    const router = useRouter();

    return (
        <Layout>
            {
                router.isFallback ? (
                    <p>
                        Loading...
                    </p>
                ) : (
                    <>
                    <Meta
                    title={`${category[0].toUpperCase()+category.slice(1)}`}
                    />
                    <Banner
                    blog={blogs[0]}
                    />
                    <section className="category-area ptb-110">
                    <div className="container">
                    <div className="row">
                        {
                            blogs.map((blog,i) => (
                                <div className="col-12 col-sm-12 col-lg-12" key={i}>
                                    <BlogCard data={blog} />
                                </div>
                            ))
                        }
                    </div>
                    </div>
                    </section>
                    <style jsx>{`
                    .category-area{
                        width:100%;
                        min-height:45vh;
                    }
                    `}</style>
                    </>
                )
            }            
        </Layout>
    )
};

export async function getStaticProps(context){

    const {category} = context.params;

    // get the blog.
    let blogs = data.filter(blog => blog.category === category);

    return {
        props:{
            blogs,
            category
        },
        revalidate:1
    };

};

export async function getStaticPaths(){

    let categories = ["front-end","back-end","databases","apis"];

    let paths = categories.map((category) => {
        return {
            params:{
                category
            }
        }
    });

    return {
        paths,
        fallback:true
    };

};

export default CategoryPage;