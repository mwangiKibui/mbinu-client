import Head from 'next/head';

function Meta({title,description,url,image}){
    return (
        <Head>
            <title>{title}</title>
            <meta  name="twitter:card" content="summary_large_image" />
            <meta  name="og:type" content="website" />
            <meta  name="og:url" content={url} />
            <meta  name="og:title" content={title} />
            <meta  name="og:description" content={description} />
            <meta  name="og:image" content={image} />
        </Head>
    )
};

Meta.defaultProps = {
    title:"Mbinu",
    description:"Simplifying approaches to developers.",
    url:"https://mbinu.vercel.app",
    image:""
}

export default Meta;