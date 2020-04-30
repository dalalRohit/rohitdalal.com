import React from 'react'
import {Link} from 'gatsby';
import classes from './blog-header.module.css';
import {IoMdSunny,IoMdMoon} from 'react-icons/io';


export default function BlogHeader(props) {
    return (
        <div className={classes.Header}>
            <Link 
                to={`/${props.path}`} replace  > back to {props.location} 
            </Link>

            { props.theme==='light' ? <IoMdMoon size={30} onClick={props.click} /> : <IoMdSunny size={30} onClick={props.click} /> }
        </div>
    )
}
