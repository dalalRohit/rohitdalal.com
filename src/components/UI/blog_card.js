import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react'
import  './../../styles/helpers/blogcard.scss';
import Img from "gatsby-image"

export default function BlogCard(props) {
    const {title,date,fluid,slug,time,tags}=props;

    const blogTags=tags.map( (t) => {
         return (
             <span className="Tag" key={Math.random()}>
                 <Link to={`/tags/${t}`}>
                     {t}
                </Link>
             </span>
         )
    })
    return (
        <section className="blogCard">

            <header className="blogImg">
                <Link to={`/blogs/${slug}`}>
                    <Img 
                        fluid={fluid}
                        alt={title}
                        title={title}
                        />
                </Link>

            </header>

            <div className="blogTags">
                {blogTags}
            </div>

            <div className="blogData">
                    <p><Link to={`/blogs/${slug}`}>{title}</Link></p>

                    <div className="mobileTags">
                        {blogTags}
                    </div>
                    
                    <div className="dateTime">
                        <date>{date}</date>
                        <span>{time}</span>
                    </div>
            </div>

        </section>  
    )
}

