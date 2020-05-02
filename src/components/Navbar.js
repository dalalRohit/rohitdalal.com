import React, { Component } from 'react'

import classes from './../styles/navbar.module.css';
import Logo from './UI/logo';
import Sidenav from './sidenav';
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
        const color=this.props.theme==='light' ?  'black' : '#eee';
        const bgcolor=this.props.theme==='light' ?  '#eee' : '#131313';

        return (
            <> 
                <div className={navClass.join(" ")}>
                        <Bottom 
                            theme={this.props.theme} />
 
                        <Logo />

                        <div className={classes.Nav}>
                            
                            <NavItems
                                display={"row"}
                                scroll={true}
                                />
                            
                        </div>
                         
                
                </div>
            </>
        )
    }
}
