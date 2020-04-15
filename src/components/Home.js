import React, { Component } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import classes from './home.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import { bounceAnimation } from './helpers/animations';
import {graphql,useStaticQuery} from 'gatsby';
import Navbar from './Navbar';


const Home=() => {
    const Bounce = styled.div`
        animation: 5s ${bounceAnimation};
    `
    const name = "Home";
    const offset=-52;
    const data = useStaticQuery(graphql`
        query  {
            site {
                siteMetadata {
                    title,
                    author,
                    description,
                    intro
                }
            }
        }
    `)
    return (
        <div className={classes.Wrapper} id={name} >
            <>
                <Navbar offset={offset}/>
            </>
            <div className={classes.Home}>

                <div className={classes.Name}>

                    <div className={classes.Brand}>
                        <h1> {data.site.siteMetadata.author} </h1>
                        <p> {data.site.siteMetadata.description} </p>
                    </div>

                    <div className={classes.Intro}>
                        <p>{data.site.siteMetadata.intro}</p>
                    </div>

                </div>

                <div className={classes.Arrow} >
                    <Link
                        to={"About"}
                        smooth={true}
                        duration={500}
                        offset={-52}
                        >
                        <Bounce><IoIosArrowDown size={'30px'} /></Bounce>
                    </Link>
                </div>
            
            </div>


        </div>
    )
}


export default Home