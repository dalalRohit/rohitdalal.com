import React, { Component } from 'react'

import classes from './projects.module.css';
import Card from './Card';

export default class Projects extends Component {
    render() {
        const name = "Projects";
        return (
            <div
                id={name}
                className={classes.Projects}>
                <h1>Projects</h1>
                <div className={classes.MainProjects}>
                    <Card>Project 1</Card>
                    <Card>Project 2</Card>
                    <Card>Project 3</Card>
                    <Card>Project 4</Card>
                    <Card>Project 5</Card>
                </div>
            </div>
        )
    }
}
