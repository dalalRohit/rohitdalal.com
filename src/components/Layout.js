import React,{useRef} from 'react'
import {Element} from 'react-scroll';
import './../styles/style.css';
import PropTypes from 'prop-types';

export default function Layout(props) {

    return (
        <Element name={props.name} id={props.name} className="Container" ref={useRef()} >
            {props.children}
        </Element>
    )
}

Layout.propTypes={
    name:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}
