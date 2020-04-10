import React from 'react'
import styled from 'styled-components';

const BackdropDiv=styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.35);
    z-index:1000;
`
// const Text=styled.div`
//     border:1px solid white;
//     text-align:center;
//     padding:2em;
// `
export default function Backdrop(props) {
    return (
        <BackdropDiv onClick={props.click}
            style={{ display: props.show ? 'block' : 'none' }}
            >
            {/* <Text>
                <p>Click anywhere to exit</p>
            </Text> */}
        </BackdropDiv>
    )
}