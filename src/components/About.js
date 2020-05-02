import React, { Component } from 'react'
import Layout from './Layout';

import classes from './../styles/about.module.css';
import Photo from './UI/image';
import Skills from './UI/skills';
import Title from './UI/title';

export default class About extends Component {

    render() {
        const name="About";

        return (
            <Layout name={name} id={name}>

                <div className={classes.Wrapper} >

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
                        <h2>Skills</h2>
                        <Skills  />
                    </div>

                </main>
            </div>
            
            </Layout>
        )
    }
}
