import React from 'react'

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import './../styles/style.css';
import PropTypes from 'prop-types';


function PageLayout(props) {
    return (
        <>
            <Navbar 
                display="row"
                scroll={props.scroll} 
                gradient={props.gradient}
                offset={-60}
            />
            
            {props.children}
            
            <Footer />
        </>
    )
}

PageLayout.propTypes={
    scroll:PropTypes.bool,
    gradient:PropTypes.bool,
    children:PropTypes.node.isRequired
}


export default PageLayout; 

