import React, { Component } from 'react'
import Layout from './Layout';

import classes from './../styles/about.module.scss';

import Photo from './UI/image';
import Skills from './UI/skills';
import Title from './UI/title';

export default class About extends Component {

    render() {
        const name="About";

        return (
            <Layout name={name} id={name}>

                <div className={"Wrapper"} >

                <Title path={name}>/about</Title>
                
                <main className={classes.About}>

                    <div className={classes.Info}>
                        <div className={classes.Photo}>
                            <Photo />
                        </div>
                        <div className={classes.Desc}>
                            <p> 
                                Hey, there <br/>
                                Full Stack developer with expertise in backend tech and a competetive programmer 
                                with interest in machine learning
                                Hey, there <br/>
                                Full Stack developer with expertise in backend tech and a competetive programmer 
                                with interest in machine learning
                                  
                            </p>
                        </div>
                    </div>

                    <div className={classes.Skills}>
                        <div>
                            <h3>What I do?</h3>
                            <ul>
                                <li>Web devlopement</li>
                                <li>Competetive Programming</li>
                                <li>Front end</li>
                                <li>Back end</li>
                            </ul>
                        </div>

                        <div>
                            <h3>What I use? </h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
  
                        </div>
                    </div>

                </main>
            </div>
            
            </Layout>
        )
    }
}
