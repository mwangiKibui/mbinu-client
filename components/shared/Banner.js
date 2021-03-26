
import Link from 'next/link';

const Banner = ({blog}) => {

    return (

        <div className="main-banner">
            
            <div className="main-banner-overlay">

            <div className="d-table">

                <div className="d-table-cell">

                    <div className="container-fluid">

                        <div className="row align-items-center">

                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">

                                        <h2>
                                            {blog['title']}
                                        </h2>
                                        

                                        <div className="content-author">

                                            <img
                                            className="content-author-img"
                                            src={blog['image']}
                                            alt="kennedy mwangi"
                                            />

                                            <div className="content-author-info">

                                                <Link href="/authors/kennedymwangi">
                                                    <a>
                                                        {blog['author']['name']}
                                                    </a>
                                                </Link>
                                                
                                            </div>

                                        </div>

                                    </div>

                                </div>  

                            </div>

                        </div>

                    </div>

                </div> 

            </div>  

        </div>
        
    );
};

export default Banner;