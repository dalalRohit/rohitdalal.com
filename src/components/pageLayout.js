import React from 'react'

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import './../styles/style.css';
import PropTypes from 'prop-types';

export default function PageLayout(props) {
    return (
        <React.Fragment>
            <Navbar 
                display="row"
                scroll={props.scroll} 
                gradient={props.gradient}
                />

            {props.children}
            
            <Footer />
        </React.Fragment>
    )
}

PageLayout.propTypes={
    scroll:PropTypes.bool,
    gradient:PropTypes.bool,
    children:PropTypes.node.isRequired
}
