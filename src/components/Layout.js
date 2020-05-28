import React from 'react'
import './../styles/style.scss';
import PropTypes from 'prop-types';
export default function Layout(props) {

    return (
        <div id={props.name} className="Container" >
            <div className="Wrapper">
                {props.children}
            </div>
        </div>
    )
}

Layout.propTypes={
    name:PropTypes.string.isRequired,
    children:PropTypes.node.isRequired,
}
