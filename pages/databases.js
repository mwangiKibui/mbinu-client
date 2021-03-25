
import Layout from "../components/shared/Layout";
import Meta from "../components/shared/Meta";

function Databases(){
    return (
        <Layout>
        <Meta
        title="Databases"
        description="Exploring different database techniques"
        />
        <section className="databases-area ptb-110">
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12">
                    <p>
                        The databases will be here.
                    </p>
                </div>
            </div>
            </div>
        </section>
        <style jsx>{`
        .databases-area {
            width:100%;
            min-height:45vh;
        }
        `}</style>
        </Layout>
    )
};

export default Databases;