import React, { Component } from 'react'
import PropTypes from 'prop-types';

import classes from './../styles/navbar.module.css';
import Logo from './UI/logo';
import NavItems from './helpers/nav_items';

import Bottom from './helpers/Bottom';


export default class Navbar extends Component {
    state={
        show:false,
    }
    
    componentDidMount(){
        window.addEventListener('scroll',() => {
            const top=window.scrollY > 450 ;
            if(top === true){
                this.setState({scrolled:true})
            }
            else{
                this.setState({scrolled:false})
            }
        })
    }


    render() {
        const {display,scroll,changeBlog,gradient}=this.props;

        let navClass=[classes.Wrapper]
        if(this.state.scrolled){
            navClass.push(classes.Scrolled);
        }
        var x='linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)';
        var style={
            linearGradient:x,
            backgroundImage:navClass.length===1 && gradient ? x : "none",
            backgroundColor:'#eee'
        }

        return (
            <> 
                <div 
                    className={navClass.join(" ")} 
                    style={style} >

                        <Logo />

                        <div className={classes.Nav}>
                            
                            <NavItems
                                display={display}
                                scroll={scroll}
                                changeBlog={changeBlog}
                                />

                        </div>

                        <Bottom 
                            display={display} 
                            scroll={scroll} 
                            changeBlog={changeBlog}
                        
                        />
               
                </div>
            </>
        )
    }
}

Navbar.propTypes={
    display:PropTypes.string, //how to display nav-items . "row"
    scroll:PropTypes.bool,  //whether to use 'react-scroll' or 'gatsby-link',
    changeBlog:PropTypes.string,
    gradient:PropTypes.bool
}
