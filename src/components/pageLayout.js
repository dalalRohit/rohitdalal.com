import React,{useEffect,useState} from "react"
import {window} from 'browser-monads';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import './../styles/style.scss';
import PropTypes from 'prop-types';
import ThemeContext from '../context/context'

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

    const {scroll,changeBlog,blogTitle,margin,extraheight,scrollHeight}=props;

    return (
      <ThemeContext.Consumer>
        {
          (theme) => {
            const x=['layout'];
            theme.dark ? x.push('dark') : x.push('light');


            return (
            <div className={x.join(" ")} >

              <Navbar 
                  scroll={scroll} 
                  offset={width < 700 ? -33 : -69}
                  changeBlog={changeBlog}
                  blogTitle={blogTitle}
                  // height={extraheight}
                  scrollHeight={scrollHeight}
              />
              
              <main className="main-content" style={{marginTop:margin===true ? "7vh" : "0px"}} >
                {props.children}
              </main>
              
              <Footer />

            </div>

            )
          }
        }
        
      </ThemeContext.Consumer>
    )
}

PageLayout.propTypes={
    scroll:PropTypes.bool,
    children:PropTypes.node.isRequired
}


export default PageLayout; 

