
import Link from 'next/link';

function BlogCard({data}){
    return (
        <div className="blog-card-wrapper">

            <div className="blog-card-img">
                <img
                src={data.image}
                alt={data.title}
                />
            </div>

            <div className="blog-card-info">

                <Link href={`/${data.category}/${data.title}`}>
                    <a>
                        {data.title}
                    </a>
                </Link>

                <p className="blog-card-date">
                    {
                        new Date(data.date).toLocaleDateString()
                    }
                </p>

                <div className="blog-card-author-info">
                    
                   <div className="blog-card-author-img">
                        <img
                        src={data.author.profile_picture}
                        alt={data.author.name}
                        />
                   </div>

                   <div className="blog-card-author-details">
                        <Link href={`/authors/${data.author.username}`}>
                            <a>
                                {data.author.name}
                            </a>
                        </Link>
                   </div>

                </div>

            </div>

        </div>
    )
};

export default BlogCard;