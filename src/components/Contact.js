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
            <div >
                <div
                    id={name}
                    title={name}
                    className={classes.Contact}>
                    <h1>Contact</h1>
                </div>
                <Footer >
                    Designed and coded with <IoMdHeart />
                </Footer>
            </div>
        )
    }
}
