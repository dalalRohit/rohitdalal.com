import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
import styled from 'styled-components';

const FormDiv=styled.div`
    box-sizing:border-box;
    width:90%;
    max-width:100%;
    margin:0 5% 0 5%;
`

const MainForm=styled.form`
    box-sizing:border-box;
    width:100%;
    max-width:100%;
    padding:1.4em;
    display:flex;
    flex-flow:column;
`
const FormBtn=styled.div`
    margin-top:10px;
`
class Form extends Component{
    state={
        name:'',
        email:'',
        contact:''
    }

    onTextInput=(e) => {
        const val=e.target.value;
        const field=e.target.name;
        console.log(val,field);
        this.setState({
            ...this.state,
            [field]:val
        })

    }
    onButtonClick=(event) => {
        event.preventDefault();
    }
    render(){
        const data=[
            {label:"Name",name:"name",helper:"How may I call you?"},
            {label:"Email",name:"email" ,helper:"Email won't be used anywhere ;)"},
            {label:"Contact",name:"contact",helper:"Mobile number"}
        ]
        return (
            <FormDiv>
                <MainForm>
                    {
                        data.map( (input) => {
                            return (
                                <TextField 
                                    value={this.state[input.name]}
                                    margin={"normal"}
                                    key={Math.random()}
                                    variant={"outlined"}
                                    required onChange={(e) => this.onTextInput(e)} 
                                    name={input.name} 
                                    label={input.label}
                                    helperText={input.helper} />
                            )
                        })
                    }
    
                    <FormBtn>
                        <Button type="submit" variant="contained" color="primary" onClick={this.onButtonClick} >Send</Button>
                    </FormBtn>
    
                </MainForm>
            </FormDiv>
        )
    }
}

export default Form;
