import React, { Component } from 'react'


import classes from './about.module.css';
import Photo from './UI/image';
import Skills from './UI/skills';

export default class About extends Component {
    render() {
        const name="About";

        return (
            <div id={name} className={classes.Wrapper} >
                
                <h1>/about</h1>
                
                <main className={classes.About}>

                    <div className={classes.Info}>
                        <div className={classes.Photo}>
                            <Photo />
                        </div>
                        <div className={classes.Desc}>
                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.  </p>
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
