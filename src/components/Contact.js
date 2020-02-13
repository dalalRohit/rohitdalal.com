import React, { Component } from 'react'
import classes from './contact.module.css';


export default class Contact extends Component {
    render() {
        const name="Contact";
        return (
            <div id={name} className={classes.Wrapper}>
                <h1>Contact</h1>

                <main className={classes.Contact}>
                    <div className={classes.Form}>
                        <h2>Form</h2>
                    </div>

                    <div className={classes.Social}>
                        <h2>Social</h2>
                    </div>
                </main>
            
            </div>
        )
    }
}
