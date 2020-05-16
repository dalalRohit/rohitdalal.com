import React from 'react'
import './../styles/style.css';
import PropTypes from 'prop-types';

export default function Layout(props) {

    return (
        <div  name={props.name} id={props.name} className="Container" >
            {props.children}
        </div>
    )
}

Layout.propTypes={
    name:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}
