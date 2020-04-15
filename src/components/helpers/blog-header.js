import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';
import classes from './blog-header.module.css';


export default function BlogHeader(props) {
    return (
        <div className={classes.Header}>
            <Link 
                to={`/${props.path}`} > back to {props.location} 
            </Link>
        </div>
    )
}
