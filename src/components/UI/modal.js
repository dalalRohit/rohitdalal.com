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
    height:50%;
    max-width:100%;
    margin:0 10% 0 10%;
    position:fixed;
    top:15%;
    left:0;
    z-index:1000000000000000000;
    background-color:#eee;
    display:none;
    transition: all 2s ease-out;
    border-radius:18px;
    overflow-y:scroll;
    @media (max-width:768px){
        width:96%;
        margin:0 2% 0 2%;
    }

`

const ModalHeader=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom:1.4px solid gray;
`

const ModalContent=styled.main`
    box-sizing:border-box;
    width:100%;
    padding:1.2em;
    overflow:scroll;

`
export default class Modal extends Component {
    render() {
        return (
            <ModalWrapper >
                <Backdrop show={this.props.show} click={this.props.click}/>

                <ModalDiv style={{
                    display:this.props.show ? 'block' : 'none',height:this.props.height,
                    }}>

                    <ModalHeader>
                        <h4>{this.props.header}</h4>
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
