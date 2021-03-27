
import data from "../../store/data/blogs";
import Layout from "../../components/shared/Layout";
import Meta from "../../components/shared/Meta";
import MainContent from "../../components/Post/MainContent";
import Related from "../../components/Post/Related";

function Post({post,related}){
    return (
        <Layout>

            <Meta
            title={post.title}            
            />

            <MainContent post={post} />

            <Related related={related} />

        </Layout>
    )
};

export async function getStaticProps(context){

    let {slug} = context.params;
    
    // find the post.
    let post = data.find((blog) => blog.slug === slug);

    // category related.
    let cat_related = data.filter((blog) => blog.slug !== slug && blog.category === post.category);

    //others.
    let gen_related = data.filter((blog) => blog.slug !== slug && blog.category !== post.category);

    let related = [...cat_related,...gen_related].slice(0,4);

    return {
        props:{
            post,
            related
        },
        revalidate:1
    };

};

export async function getStaticPaths(){

    let paths = data.map((blog) => `/post/${blog.slug}`);

    return {
        paths,
        fallback:false
    };

};

export default Post;