import React from 'react'
import classes from './../../styles/blog-header.module.css';
import NavItems from './nav_items';

export default function BlogHeader(props) {
    return (
        <div className={classes.Header}>

            <NavItems display="row" scroll={false} />
            <p>Blog title</p>

        </div>
    )
}
