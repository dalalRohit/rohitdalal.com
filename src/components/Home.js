import React from 'react';

import classes from './../styles/home.module.scss';
import { Element } from "react-scroll";
import {graphql,useStaticQuery} from 'gatsby';



const Home=(props) => {

    const name = "Home";
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