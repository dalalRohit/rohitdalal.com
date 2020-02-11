import React, { Component } from 'react';
import classes from './about.module.css';
class About extends Component {
    render() {
        const name = 'About';
        return (
            <div title={name} id={name} className={classes.About}>
                <h1>About</h1>
            </div>
        )
    }
};

export default About;