
import Layout from "../components/shared/Layout";
import Meta from "../components/shared/Meta";
import MainContent from "../components/about/MainContent";

function About(){
    return (
        <Layout>
            <Meta
            title="About"
            description="Get to know more about Mbinu"
            />
            <MainContent />
        </Layout>
    )
};

export default About;