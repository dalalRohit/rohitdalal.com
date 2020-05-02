import React from 'react'
import styled from 'styled-components';

const InputWrapper=styled.div`
    box-sizing:border-box;
    width:100%;
    max-width:100%;
    // border:1px solid red;
    padding:1em;
`
const Label=styled.label`
    box-sizing:border-box;
    color:black;
    width:30%;
    margin-right:15px;
    padding:.5em;
    font-weight:600;
    text-align:center;
`

const InputBox=styled.input`
    box-sizing:border-box;
    border:none;
    outline:none;
    border-bottom:2px solid gray;  
    width:65%;
    padding:.5em;
    line-height:1rem;

    &:focus{
        border:1px solid #555;
    }

`
function Input(props) {
    const { classes,value,error,name,label,type,helper,multiline,inputChange,theme} = props;

    return (
        <InputWrapper>
            <Label >{label ? label : 'label'}</Label>
            <InputBox
                required
                autoComplete="off"
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