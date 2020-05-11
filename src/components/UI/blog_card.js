import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react'
import classes from  './../../styles/blogcard.module.scss';
import sample from './../../images/sample.jpg';
import Img from "gatsby-image"

export default function BlogCard(props) {
    const {title,date,img,slug,time,tags}=props;

    const tag=tags.map( (t) => {
         return <Link to={`/tags/${t}`} ><span>{t}</span></Link>
    })
    return (
        <div className={classes.Wrapper} title={title} >
                <main className={classes.Blog}>
                    <div className={classes.BlogImg}>
                        <Link to={`/blogs/${slug}`} > 
                            <img src={img}   /> 
                        </Link>
                    </div>

                    <div className={classes.BlogContent}>

                        <header className={classes.BlogTitle}>
                            <div className={classes.Tags}>
                                {tag}
                            </div>
                            <Link to={`/blogs/${slug}`} ><p>{title}</p></Link>
                        </header>

                        <footer className={classes.BlogFooter}>
                            <span>{date}</span>
                            <span>{time}</span>
                        </footer>

                    </div>
                </main>
        </div>
    )
}

BlogCard.propTypes={
    title:PropTypes.string,
    date:PropTypes.string,
    time:PropTypes.string,
    slug:PropTypes.string
}

