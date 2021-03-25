
import Layout from "../components/shared/Layout";
import Meta   from "../components/shared/Meta";

function Frontend(){
    return (
        <Layout>
        <Meta
        title="Front-end"
        description="Exploring different front-end techniques"
        />
        <section className="front-end-area ptb-110">
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <p>
                        The front-end will be here.
                    </p>
                </div>
            </div>
            </div>
        </section>
        <style jsx>{`
        .front-end-area{
            width:100%;
            min-height:45vh;
        }
        `}</style>
        </Layout>
    )
};

export default Frontend;