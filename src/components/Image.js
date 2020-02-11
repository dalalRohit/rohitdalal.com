import React from 'react';
import styled from 'styled-components';
// import Photo from './../images/COLOR_POP.jpg';

const ImageDiv = styled.div`
    box-sizing:border-box;
    width:300px;
    height:300px;
    border:1px solid red;
    padding:.4rem;
`
const Image = () => {
    return (
        <ImageDiv >
            <p>This is my Photo</p>
        </ImageDiv>
    )
};

export default Image;