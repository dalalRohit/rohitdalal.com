import React, { Component } from 'react'
import classes from './contact.module.css';
import Form from './UI/Form';
import {FaInstagram,FaLinkedinIn,FaTwitter,FaMediumM} from 'react-icons/fa'
export default class Contact extends Component {

    render() {
        const name="Contact";
        return (
            <div id={name} className={classes.Wrapper}>
                <h1>#Contact</h1>

                <main className={classes.Contact}>
                    <div className={classes.Form}>
                        <p>Let's have a cup of coffee ;)</p>
                        <Form  />
                    </div>

                    <div className={classes.Social}>
                        <h2>Social</h2>
                        <p>You can reach to me here</p>
                        <div className={classes.Icons}>
                            <li>
                                <FaInstagram size={"30px"} /> 
                            </li>
                            <li><FaLinkedinIn size={"30px"} /></li>
                            <li><FaTwitter size={"30px"} /></li>
                            <li><FaMediumM size={"30px"} /></li>
                        </div>
                    </div>
                </main>
            
            </div>
        )
    }
}
