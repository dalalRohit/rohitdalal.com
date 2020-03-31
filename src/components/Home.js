import React, { Component } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import classes from './home.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import { bounceAnimation } from './animations';

import Nav from './Nav';
import Navbar from './Navbar';

class Home extends Component {

    render() {
        const Bounce = styled.div`
            animation: 5s ${bounceAnimation} infinite;
        `
        const name = "Home";
        let offset=-58.49;
        return (
            <div className={classes.Wrapper} id={name} >

                <>
                    <Navbar offset={offset}/>
                </>
                <div className={classes.Home}>

                    <div className={classes.Name}>

                        <div className={classes.Brand}>
                            <h1>ROHIT DALAL</h1>
                            <p>Full-Stack JavaScript developer</p>
                        </div>

                        <div className={classes.Intro}>
                            <p>This is my intro</p>
                        </div>

                    </div>

                    <div className={classes.Arrow} >
                        <Link
                            to={"About"}
                            smooth={true}
                            duration={500}
                            offset={offset}
                            >
                            <Bounce><IoIosArrowDown size={'30px'} /></Bounce>
                        </Link>
                </div>
                
                </div>


            </div>
        )
    }
}

export default Home