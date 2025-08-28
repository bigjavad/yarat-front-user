import React from 'react'


const BlogSidebarCard = (props) => {
    return (
        <>
            <div className="dlab-card style-1 blog-half shadow m-b30">
                <div className="dlab-media">
                    <Link href="/blog-details"><img src={props.img} alt="" /></Link>
                </div>
                <div className="dlab-info">
                    <div className="dlab-meta">
                        <ul>
                            <li className="post-date">August 30, 2019</li>
                        </ul>
                    </div>
                    <h4 className="dlab-title"><Link href="/blog-details">{props.heading}</Link></h4>
                    <p>Qui nunc nobis videntur parum clari, sollemnes in futurum  putamus parum claram legere.</p>
                    <Link href="/blog-details" className="btn btn-primary btn-sm light shadow-none effect-1"><span>Read More</span></Link>

                </div>
            </div>
        </>
    )
}

export default BlogSidebarCard
