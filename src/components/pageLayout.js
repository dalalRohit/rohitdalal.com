import React,{useState} from 'react'
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import './../styles/style.css';
import PropTypes from 'prop-types';


function PageLayout(props) {
    
    const {scroll,changeBlog,blogTitle}=props;


    return (
        <>
            <Navbar 
                display="row"
                scroll={scroll} 
                offset={-59}
                changeBlog={changeBlog}
                blogTitle={blogTitle}
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

