import React, { Component } from 'react'

import classes from './navbar.module.css';
import {MdMenu} from 'react-icons/md';
import Logo from './UI/logo';
import Sidenav from './sidenav';
import NavItems from './nav_items';


export default class Navbar extends Component {
    state={
        show:false,
        dark:false
    }
    componentDidMount(){
        window.addEventListener('scroll',() => {
            const top=window.scrollY > 450 ;
            console.log(top);
            if(top === true){
                this.setState({scrolled:true})
            }
            else{
                this.setState({scrolled:false})
            }
        })
    }
    handleSideNav=() => {

        this.setState({
            show:!this.state.show
        })
    }
    render() {
        let navClass=[classes.Wrapper]
        if(this.state.scrolled){
            navClass.push(classes.Scrolled);
        }
        
        return (
            <div > 
                <Sidenav show={this.state.show} click={this.handleSideNav} />
                <div className={navClass.join(" ")}>
                        <div onClick={this.handleSideNav} className={classes.Menu} >
                            <MdMenu size={30} />
                        </div>

                        <div style={{display:this.state.show ? 'none' :'block'}} >
                            <Logo />
                        </div>
                        
                        <div className={classes.Nav}>
                            <nav className="navbar navbar-expand-lg navbar-light ">
                            
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="mr-auto"></div>
                                <NavItems offset={this.props.offset} />
                            </div>
                        </nav>
                        </div>
                </div>
            </div>
        )
    }
}
