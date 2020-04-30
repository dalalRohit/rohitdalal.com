import React,{Fragment} from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import classes from './home.module.css';
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import { bounceAnimation } from './helpers/animations';
import {graphql,useStaticQuery} from 'gatsby';
import Navbar from './Navbar';

const Bounce = styled.div`
    animation: 5s ${bounceAnimation} once;
`

const Home=(props) => {

    const name = "Home";
    const offset=-60.8;
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
        <div 
            className={classes.Wrapper} 
            id={name}
            style={
                {
                    backgroundImage:props.theme==='light' ? 'linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)' : 'linear-gradient(to right, #606c88, #3f4c6b)',
                    color:props.theme==='light' ? '#202020' : '#eee'
                }
            
            }
            >
            <Fragment>
                <Navbar 
                    offset={offset}
                    theme={props.theme}
                    click={props.click}/>
            </Fragment>

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
                        >
                        <Bounce><IoIosArrowDown size={'30px'} /></Bounce>
                    </Link>
                </div>
            
            </div>


        </div>
    )
}


export default Home