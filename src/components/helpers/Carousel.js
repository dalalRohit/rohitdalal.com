import React, { Component } from 'react'
import classes from './carousel.module.css';
import styled from 'styled-components';
import Arrow from './../UI/Arrow';
// import {entryLeft,entryRight} from './animations';

const Card=styled.div`
    box-sizing:border-box;
    width:100%;
    max-widt:100%;
    background-color:plum;
    text-align:center;
`


export default class Carousel extends Component {
    state={
        startIndex:0,
    }
    divsToShow=[
        <Card>Carousel-div-0</Card>,
        <Card>Carousel-div-1</Card>,
        <Card>Carousel-div-2</Card>, 
        <Card>Carousel-div-3</Card>, 
        <Card>Carousel-div-4</Card>, 
        <Card>Carousel-div-5</Card>, 
        <Card>Carousel-div-6</Card>, 
        <Card>Carousel-div-7</Card>, 

    ]

    nextSlide=() => {
        const lastIndex=this.divsToShow.length -1;
        const {startIndex,endIndex}=this.state;

        const resetStartIndex=startIndex===lastIndex-1;
        
        this.setState({
            startIndex:resetStartIndex ? 0 : startIndex+1,
        })
    }

    prevSlide=() => {
        const lastIndex=this.divsToShow.length-1;
        const {startIndex,endIndex}=this.state;

        const resetStartIndex=startIndex===0;

        this.setState({
            startIndex:resetStartIndex ? lastIndex : startIndex-1,
        })
    }
    render() {

        return (
            <div className={classes.Wrapper}>
                <Arrow dir={'left'} size={30} click={this.prevSlide} />

                <div className={classes.Carousel}>
                   { this.divsToShow[this.state.startIndex] }
                </div>

                <Arrow dir={'right'} size={30} click={this.nextSlide} />


            </div>
        )
    }
}
