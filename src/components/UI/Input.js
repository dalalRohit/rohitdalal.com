import React from 'react'
import styled from 'styled-components';
    
const InputWrapper=styled.div`
box-sizing:border-box;
width:100%;
max-width:100%;
padding:1em;
display:flex;
align-items:center;
`

const Label=styled.label`
box-sizing:border-box;
color:black;
width:30%;
padding:.5em;
font-weight:550;
font-size:1.2rem;
text-align:center;
`

const InputBox=styled.input`
box-sizing:border-box;
border:none;
border-bottom:2px solid plum;  
width:65%;
padding:.5em;
line-height:1.5rem;
transition: all 0.1s ease;

&:focus{
    outline:2px solid plum;  
}
`

function Input(props) {


    const { value,error,name,label,type,inputChange,theme} = props;

    return (
        <InputWrapper>
            <Label >{label ? label : 'label'}</Label>
            <InputBox
                required="Required"
                autoComplete={"off"}
                type={type}
                value={value}
                name={name}
                onChange={inputChange}
                placeholder={`Enter your ${name} here..`}
            />
        </InputWrapper>
    )
}


export default Input;