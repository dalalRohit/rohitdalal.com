import React, { Component } from 'react'


import classes from './about.module.css';
import Photo from './UI/image';
import Skills from './UI/skills';
import Modal from './UI/modal';

export default class About extends Component {

    render() {
        const name="About";

        return (
            <div id={name} className={classes.Wrapper} >

                <h1 >/about</h1>
                
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
        )
    }
}
