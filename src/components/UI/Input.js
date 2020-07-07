import React from 'react'
import styled from 'styled-components';

const InputWrapper=styled.div`
box-sizing:border-box;
width:100%;
max-width:100%;
padding:1em;
display:flex;
justify-content:space-between;
align-items:center;

`

const Label=styled.label`
box-sizing:border-box;
width:auto;
margin:0;
padding:.5em;
font-size:1.1rem;
text-align:center;
`

const InputBox=styled.input`
box-sizing:border-box;
border:none;
border-bottom:2px solid golden;  
width:65%;
padding:.5em;
line-height:1.5rem;
transition: all 0.1s ease;

&:focus{
    outline:2px solid plum;  
}
`

function Input(props) {

    const { value,name,label,type,inputChange} = props;

    return (
        <InputWrapper>
            <Label htmlFor={name} >{label ? label : 'label'}</Label>
            <InputBox
                required={true}
                autoComplete="off"
                aria-label={label}
                aria-required="true"
                type={type}
                value={value}
                id={name}
                name={name}
                onChange={inputChange}
                placeholder={`Enter your ${name} here..`}
            />
        </InputWrapper>
    )
}


export default Input;