import React, { Component } from 'react'
import classes from './about.module.css';
import Photo from './UI/image';

export default class About extends Component {
    render() {
        const name="About";
        return (
            <div id={name} className={classes.Wrapper} >
                <h1>About</h1>
                <main className={classes.About}>

                    <div className={classes.Info}>
                        <div className={classes.Photo}>
                            <Photo />
                        </div>
                        <div className={classes.Desc}>
                            This is my description
                        </div>
                    </div>

                    <div className={classes.Skills}>
                        <h2>Skills</h2>
                    </div>

                </main>
            </div>
        )
    }
}
