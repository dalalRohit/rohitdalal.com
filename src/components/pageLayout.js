import React,{useEffect,useState} from "react"

import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import './../styles/style.scss';
import PropTypes from 'prop-types';

function PageLayout(props) {
    const [width,setWidth]=useState(window.innerWidth);


    //https://stackoverflow.com/questions/53464595/how-to-use-componentwillmount-in-react-hooks
    useEffect(() => {
      window.addEventListener('resize',() => {
        setWidth(window.innerWidth);
  
        return () => {
          window.removeEventListener('resize',() => {
            setWidth(window.innerWidth);
          })
        }
      })
    })

    const {scroll,changeBlog,blogTitle,margin}=props;
    console.log(props);

    return (
        <div className="layout">
            <Navbar 
                display="row"
                scroll={scroll} 
                offset={width < 700 ? -33 : -62}
                changeBlog={changeBlog}
                blogTitle={blogTitle}
            />
            
            <main className="main-content" style={{marginTop:margin===true ? "8vh" : "0px"}} >
              {props.children}
            </main>
            
            <Footer />
        </div>
    )
}

PageLayout.propTypes={
    scroll:PropTypes.bool,
    children:PropTypes.node.isRequired
}


export default PageLayout; 

