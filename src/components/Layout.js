import React from 'react'
import {Element} from 'react-scroll';
import './../styles/style.css';
import PropTypes from 'prop-types';

export default function Layout(props) {

    return (
        <React.StrictMode>
            <Element name={props.name} id={props.name} className="Wrapper" >
                {props.children}
            </Element>
        </React.StrictMode>
    )
}

Layout.propTypes={
    name:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}
