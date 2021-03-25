
import Layout from "../components/shared/Layout";
import Meta from "../components/shared/Meta";

function Backend(){
    return (
        <Layout>
        <Meta
            title="Back-end"
            description="Exploring different back-end techniques"
        />
        <section className="back-end-area ptb-110">
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <p>
                        The back-end will be here.
                    </p>
                </div>
            </div>
            </div>
        </section>
        <style jsx>{`
        .back-end-area{
            width:100%;
            min-height:45vh;
        }
        `}</style>
        </Layout>
    )
};

export default Backend;