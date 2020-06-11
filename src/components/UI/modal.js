import React, { Component } from 'react'
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import Backdrop from './backdrop';

const ModalWrapper=styled.div`
    width:100%;
    display:flex;
`


const ModalDiv=styled.div`
    box-sizing:border-box;
    width:80%;
    // height:50%;
    max-width:100%;
    margin:0 10% 0 10%;
    position:fixed;
    top:15%;
    left:0;
    z-index:1000000000000000000;
    background-color:#eee;
    display:none;
    transition: all .5s ease-out;
    @media (max-width:620px){
        width:96%;
        margin:0 2% 0 2%;
    }
    overflow-y:scroll;

`

const ModalHeader=styled.div`
    display:flex;
    width:79%;
    justify-content:space-between;
    align-items:center;
    color:black;
    position:fixed;
    background-color:lightgray;
    height:5vh;
    z-index:100;
    @media (max-width:620px){
        width:95%;
    }
`

const ModalContent=styled.main`
    box-sizing:border-box;
    width:100%;
    padding:1.2em;
    color:black;
    font-size:1.25rem;
    position:relative;
    top:5vh;
    
    //markdown post content styles
    .website,.github{
        box-sizing:border-box;
        border:none;
        background:plum;
        padding:.8rem;
        margin:10px;

        &:hover{
            background:pink;
        }
    }

    ol{
        width:80%;
        box-sizing:border-box;
        list-style-position:inside;
        border-radius:7px;
        padding:.8rem;
    }

    span{
        margin:1rem;
    }

`
export default class Modal extends Component {
    render() {
        return (
            <ModalWrapper >
                <Backdrop show={this.props.show} click={this.props.click}/>

                <ModalDiv style={{
                        display:this.props.show ? 'block' : 'none',
                        height:this.props.height,
                    }}>

                    <ModalHeader>
                        <h2>{this.props.header}</h2>
                        <MdClose size={20} style={{margin:'10px',cursor:'pointer'}} onClick={this.props.click}/>
                    </ModalHeader>

                    <ModalContent>
                        {this.props.children}
                    </ModalContent>
                </ModalDiv>
            
            </ModalWrapper>
        )
    }
}
