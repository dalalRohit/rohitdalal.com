import React, { Component } from 'react'
import classes from './contact.module.css';
import styled from 'styled-components';
import { IoMdHeart } from 'react-icons/io'
const Footer = styled.footer`
    width:100%;
    max-width:100%;
    border:1px solid black;
    background-color:black;
    color:white;
    box-sizing:border-box;
    padding:.3rem;
    font-family:Poppins;
    text-align:center;
`
export default class Contact extends Component {
    render() {
        const name = "Contact";
        return (
            <div id={name} className={classes.Wrapper}>

                <div className={classes.Contact}>
                    <div className={classes.Form}>
                        FORM
                    </div>

                    <div className={classes.Social}>
                        SOCIAL
                    </div>
                </div>

                <Footer >
                    Designed and coded with <IoMdHeart />
                </Footer>
            </div>
        )
    }
}
