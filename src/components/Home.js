import React,{Fragment} from 'react';

import classes from './../styles/home.module.css';
import { Element } from "react-scroll";
import {graphql,useStaticQuery} from 'gatsby';
import Navbar from './Navbar';



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
        <Element name={name} id={name} >
            <div className={classes.Wrapper} >
                
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


            
            </div>



        </div>
        </Element>
    )
}


export default Home