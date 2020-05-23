import React from 'react'
import './../styles/style.scss';
import PropTypes from 'prop-types';
import {Element} from 'react-scroll';
export default function Layout(props) {

    return (
        <Element  name={props.name} id={props.name} className="Container" >
            {props.children}
        </Element>
    )
}

Layout.propTypes={
    name:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}
