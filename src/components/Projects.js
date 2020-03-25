import React, { Component } from 'react'
import classes from './projects.module.css';
import Card from './UI/card';

export default class Projects extends Component {
    render() {
        const name="Projects";
        return (
            <div id={name} className={classes.Wrapper}>
                <h1>/projects</h1>
                <main className={classes.Projects}>
                    <Card />
                    <Card />
                    <Card />
                </main>
            </div>
        )
    }
}
