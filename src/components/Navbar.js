import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './../styles/components/navbar.scss';
import Logo from './UI/logo';
import NavItems from './helpers/nav_items';

import Bottom from './helpers/Bottom';
import Scroll from 'react-scroll';
import ThemeContext from "../context/context"
import {IoIosMoon,IoIosSunny} from 'react-icons/io';


var Events = Scroll.Events;
var scrollSpy = Scroll.scrollSpy;

export default class Navbar extends Component {
    state={
        scrolled:false,
    }
    componentDidMount() {    
        scrollSpy.update();
        window.addEventListener('scroll', this.navOnScroll)
      }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.navOnScroll)
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    navOnScroll=() => {
        const top=window.scrollY > this.props.scrollHeight ;
        if(top === true){
            this.setState({scrolled:true})
        }
        else{
            this.setState({scrolled:false})
        }
    }


    render() {
        const {display,scroll,changeBlog,offset,blogTitle,height}=this.props;

        let navClass=["navbar"]
        if(this.state.scrolled){
            navClass.push("scrolled");
        }

        return (
            <ThemeContext.Consumer>
                {
                    (theme) => {

                        return (
                        <header 
                            className="header" 
                            style={{background:navClass.length===1 ? 'inherit' : (theme.dark ? '#202020' : '#e7e7e7') }}>
                        <div className={navClass.join(" ")}  >

                            <Logo scroll={scroll} />
                            
                            {   navClass.length===2 ?
                                    <div className="blogTitle">
                                        <p>
                                            {blogTitle}
                                        </p>
                                    </div>
                                :null
                            }
                            
                            <nav className="navigation">
                                
                                <NavItems
                                    display={display}
                                    scroll={scroll}
                                    changeBlog={changeBlog}
                                    offset={offset}
                                    theme={theme}
                                    />
                                
                                {   theme.dark ? 
                                    <IoIosSunny size={30} onClick={theme.toggleDark}/> 
                                    : <IoIosMoon size={30} onClick={theme.toggleDark}/>
                                }

                            </nav>

                            <div className="toggle">
                                {theme.dark ? 
                                    <IoIosSunny size={30} onClick={theme.toggleDark}/> 
                                    : <IoIosMoon size={30} onClick={theme.toggleDark}/>}
                            </div>
     
                            {   
                                <Bottom 
                                    display={display} 
                                    scroll={scroll} 
                                    changeBlog={changeBlog}
                                    offset={offset}
                                    theme={theme}
                                />
                            }

                    
                        </div>
                        </header>
                        )
                    }
                }
                
            </ThemeContext.Consumer>
        )
    }
}

Navbar.propTypes={
    display:PropTypes.string, //how to display nav-items . "row"
    scroll:PropTypes.bool,  //whether to use 'react-scroll' or 'gatsby-link',
    changeBlog:PropTypes.bool,
    gradient:PropTypes.bool,
    offset:PropTypes.number.isRequired
}
