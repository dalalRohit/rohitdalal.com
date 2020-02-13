import React, { Component } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import classes from './home.module.css';
import Header from './Header';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import { bounceAnimation } from './animations';

class Home extends Component {
    render() {
        const Bounce = styled.div`
            animation: 5s ${bounceAnimation} infinite;
        `
        const name = "Home";
        return (
            <div className={classes.Wrapper} id={name} >
                <Header />

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
                </div>

                <div className={classes.Arrow} >
                    <Link
                        to={"About"}
                        smooth={true}
                        duration={500}>
                        <Bounce><IoIosArrowDown size={'30px'} /></Bounce>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home