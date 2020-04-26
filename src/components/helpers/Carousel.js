import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import React, { Component } from 'react'
import classes from './carousel.module.css';

export default class CarouselDiv extends Component {
    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 3
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
        };

        return (
        <div className={classes.Wrapper}>
            <Carousel 
                responsive={responsive}
                showDots 
                swipeable
                // renderDotsOutside
                keyBoardControl
                // centerMode
                partialVisbile
                >
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 1</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 2</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 3</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 4</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 3</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 4</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 3</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 4</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 3</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 4</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 3</div>
                <div style={{width:'100%',height:'400px',border:'1px solid green'}} >Item 4</div>
            </Carousel>
        </div>
    )
    }
}
