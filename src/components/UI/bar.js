import React from 'react'
import styled from 'styled-components';


export default function Bar(props) {
    const progressStyle={
        height:"30px",
        margin:"18px",
        lineHeight:"1.5rem",
        fontSize:"1.2rem"
    }
    return (
    <div className="progress" style={progressStyle}>
        <div 
            className="progress-bar"
            role="progressbar"
            style={{width:props.width}}
            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                {props.skill}
                
        </div>
    </div>
    );
}
