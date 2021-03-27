
import BlogCard from "../shared/BlogCard";

function Related({related}){

    return (
        <div className="related-area">
            <div className="container">
                <div className="row">
                    {
                        related.map((data,i) => (
                            <div className="col-12 col-sm-12 col-md-12" key={i}>
                                <BlogCard data={data} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

};

export default Related;