import React, { Component } from 'react'
import PropTypes from 'prop-types';

import classes from './../styles/components/navbar.module.scss';
import Logo from './UI/logo';
import NavItems from './helpers/nav_items';

import Bottom from './helpers/Bottom';
import {IoIosMoon,IoIosSunny} from 'react-icons';
import Scroll from 'react-scroll';

var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

export default class Navbar extends Component {
    state={
        scrolled:false,
    }
    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    
        scrollSpy.update();
        window.addEventListener('scroll', this.navOnScroll)
      }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.navOnScroll)
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }
    navOnScroll=() => {
        const top=window.scrollY > 200 ;
        if(top === true){
            this.setState({scrolled:true})
        }
        else{
            this.setState({scrolled:false})
        }
    }


    render() {
        const {display,scroll,changeBlog,offset,blogTitle}=this.props;

        let navClass=[classes.Wrapper]
        if(this.state.scrolled){
            navClass.push(classes.Scrolled);
        }


        return (
                <div className={navClass.join(" ")}  >

                    <Logo scroll={scroll} />
                    
                    <div className={classes.BlogTitle} style={{display:navClass.length===1 ? 'none' : 'block'}}>
                        <p>
                            {blogTitle}
                        </p>
                    </div>
                    
                    <nav className={classes.Nav}>
                        
                        <NavItems
                            display={display}
                            scroll={scroll}
                            changeBlog={changeBlog}
                            offset={offset}
                            />

                    </nav>

                    <Bottom 
                        display={display} 
                        scroll={scroll} 
                        changeBlog={changeBlog}
                        offset={-38}
                    
                    />
            
                </div>
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
