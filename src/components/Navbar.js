import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './../styles/components/navbar.scss';
import Logo from './UI/logo';
import NavItems from './helpers/nav_items';

import Bottom from './helpers/Bottom';
import Scroll from 'react-scroll';

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

        let navClass=["navbar"]
        if(this.state.scrolled){
            navClass.push("scrolled");
        }


        return (
                <header className={navClass.join(" ")}  >

                    <Logo scroll={scroll} />
                    
                    <div className="blogTitle" style={{display:navClass.length===1 ? 'none' : 'block'}}>
                        <p>
                            {blogTitle}
                        </p>
                    </div>
                    
                    <nav className="navigation">
                        
                        <NavItems
                            display={display}
                            scroll={scroll}
                            changeBlog={changeBlog}
                            offset={offset}
                            />

                    </nav>
                    {   
                        <Bottom 
                        display={display} 
                        scroll={scroll} 
                        changeBlog={changeBlog}
                        offset={offset}
                    
                        />
                    }

            
                </header>
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
