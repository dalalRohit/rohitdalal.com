import React, { Component } from 'react';
import classes from './about.module.css';
class About extends Component {
    render() {
        const name = 'About';
        return (
            <>
                <div id={name} className={classes.About}>
                    <div className={classes.MainAbout}>
                        <div className={classes.Photo}>IMAGE</div>

                        <div className={classes.Desc}>DESCRIPTION</div>
                    </div>
                    <div className={classes.Skills}>
                        <div>SKILLS</div>
                    </div>
                </div>
            </>

        )
    }
};

export default About;