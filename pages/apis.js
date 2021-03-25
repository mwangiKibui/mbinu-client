
import Layout from "../components/shared/Layout";
import Meta from "../components/shared/Meta";

function APIS(){
    return (
        <Layout>
        <Meta
        title="Public API's"
        description="Exploring various public API's"
        />
        <section className="apis-area ptb-110">
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <p>
                        The api's will be here.
                    </p>
                </div>
            </div>
            </div>
        </section>
        <style jsx>{`
        .apis-area{
            width:100%;
            min-height:45vh;
        }
        `}</style>
        </Layout>
    )
};

export default APIS;