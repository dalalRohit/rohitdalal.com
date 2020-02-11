import React, { Component } from 'react'

import classes from './projects.module.css';

export default class Projects extends Component {
    render() {
        const name = "Projects";
        return (
            <div
                title={name}
                id={name}
                className={classes.Projects}>
                <h1>Projects</h1>
            </div>
        )
    }
}
