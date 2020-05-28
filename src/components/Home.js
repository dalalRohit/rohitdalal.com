import React from 'react';

import  './../styles/components/home.scss';
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
            <div className="hero" >
                
                <div className="home">

                    <div className="my-info">

                        <div className="brand">
                            <h1> Namaste, I'm Rohit 👋 </h1>
                            <p> I develop websites,full stack web-apps  </p>
                        </div>

                        <div className="my-intro">
                            <p>I like to build modern web apps</p>
                        </div>

                    </div>

                </div>

            </div>
        </Element>
    )
}


export default Home