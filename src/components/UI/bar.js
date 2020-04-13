import React from 'react'


export default function Bar(props) {
    const progressStyle={
        height:"30px",
        margin:"18px",
        lineHeight:"1.5rem",
        fontSize:"1.2rem",
        color:'red'
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
