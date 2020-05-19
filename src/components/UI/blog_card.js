import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react'
import classes from './../../styles/helpers/blogcard.module.scss';
import Img from "gatsby-image"

export default function BlogCard(props) {
    const {title,date,fluid,fixed,slug,time,tags}=props;

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
      <div className={classes.blogCard}>

          <div className={classes.blogImg}>
              <Link to={`/blogs/${slug}`}>
                <Img 
                    fluid={fluid}
                    alt={title}
                    title={title}
                    // fixed={fixed}
                    style={{ margin: '.54rem', maxHeight: 'calc(50vh - 4rem)' }}
                    imgStyle={{objectFit:"contain"}}
                    />
              </Link>

          </div>

        <div className={classes.blogTags}>
            {blogTags}
        </div>

          <div className={classes.blogData}>
                <p><Link to={`/blogs/${slug}`}>{title}</Link></p>

                <div className={classes.mobileTags}>
                    {blogTags}
                </div>
                
                <div className={classes.dateTime}>
                    <date>{date}</date>
                    <span>{time}</span>
                </div>
          </div>

      </div>  
    )
}

