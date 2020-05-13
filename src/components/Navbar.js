import React, { Component } from 'react'
import PropTypes from 'prop-types';

import classes from './../styles/navbar.module.scss';
import Logo from './UI/logo';
import NavItems from './helpers/nav_items';

import Bottom from './helpers/Bottom';
import {IoIosMoon,IoIosSunny} from 'react-icons';


export default class Navbar extends Component {
    state={
        show:false,
    }
    
    componentDidMount(){
        window.addEventListener('scroll',() => {
            const top=window.scrollY > 400 ;
            if(top === true){
                this.setState({scrolled:true})
            }
            else{
                this.setState({scrolled:false})
            }
        })
    }


    render() {
        const {display,scroll,changeBlog,offset,blogTitle}=this.props;

        let navClass=[classes.Wrapper]
        if(this.state.scrolled){
            navClass.push(classes.Scrolled);
        }


        return (
                <div 
                    className={navClass.join(" ")}  >

                    <Logo scroll={scroll} />
                    
                    <div className={classes.BlogTitle} style={{display:navClass.length===1 ? 'none' : 'block'}}>
                        <p>
                            {blogTitle}
                        </p>
                    </div>
                    
                        <div className={classes.Nav}>
                        
                        <NavItems
                            display={display}
                            scroll={scroll}
                            changeBlog={changeBlog}
                            offset={offset}
                            />
                    </div>

                    <Bottom 
                        display={display} 
                        scroll={scroll} 
                        changeBlog={changeBlog}
                        offset={offset}
                    
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
