import React,{useRef} from 'react'
import PropTypes from 'prop-types';
export default function Layout(props) {

    return (
        <div id={props.name} className="Container" ref={useRef()} >
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
