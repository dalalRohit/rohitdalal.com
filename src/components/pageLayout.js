import React,{useEffect,useState} from "react"
import {window} from 'browser-monads';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import './../styles/main.scss';
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

    const {scroll,changeBlog,blogTitle,margin,scrollHeight}=props;

    return (
      <ThemeContext.Consumer>
        {
          (theme) => {
            const x=['layout'];
            theme.dark ? x.push('dark') : x.push('light');


            return (
            <div className={theme.dark ? 'dark' : 'light'} >
              
              <div className="layout">

                <div className="main">
                  <Navbar 
                      scroll={scroll} 
                      offset={width < 700 ? -33 : -60}
                      changeBlog={changeBlog}
                      blogTitle={blogTitle}
                      scrollHeight={scrollHeight}
                  />
                  
                  <main className="main-content" >
                    {props.children}

                    {/* <div> BODY </div> */}

                  </main>
                </div>
                
                <footer>
                  <Footer />
                </footer>

              </div>

            
            </div>

            )
          }
        }
        
      </ThemeContext.Consumer>
    )
}

PageLayout.propTypes={
    scroll:PropTypes.bool, //to show navbar scroll/link
    children:PropTypes.node.isRequired,
    scrollHeight:PropTypes.number.isRequired, //after scrollHeight, .scrolled to navbar
    changeBlog:PropTypes.bool.isRequired, //blog->Blogs
    blogTitle:PropTypes.string, //blogtitle

}


export default PageLayout; 

