import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';
import classes from './blog-header.module.css';
import {IoMdSunny,IoMdMoon} from 'react-icons/io';


export default function BlogHeader(props) {
    return (
        <div className={classes.Header}>
            <Link 
                to={`/${props.path}`} > back to {props.location} 
            </Link>

            { props.theme==='light' ? <IoMdMoon size={30} onClick={props.click} /> : <IoMdSunny size={30} onClick={props.click} /> }
        </div>
    )
}
