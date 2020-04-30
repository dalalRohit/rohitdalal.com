import React, { Component } from 'react'

import classes from './navbar.module.css';
import {MdMenu} from 'react-icons/md';
import Logo from './UI/logo';
import Sidenav from './sidenav';
import NavItems from './helpers/nav_items';
import {IoMdMoon,IoMdSunny} from 'react-icons/io';
import Bottom from './UI/Bottom';


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
                
                <Sidenav 
                    color={color}
                    bgcolor={bgcolor}

                    show={this.state.show}
                    click={this.handleSideNav} 
                    offset={this.props.offset} />

                <div 
                    className={navClass.join(" ")}
                    style={{
                        color,
                        backgroundColor:navClass.length===1 ? 'inherit' : bgcolor
                    }}>
                        <Bottom 
                            theme={this.props.theme} />
 
                        <Logo />

                        <div className={classes.Nav}>
                            
                            <NavItems 
                                theme={this.props.theme}
                                offset={this.props.offset}
                                modalClick={this.modalClickHandler}
                                />
                            
                        </div>
                         
                
                </div>
            </>
        )
    }
}
