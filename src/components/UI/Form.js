import React,{Component} from 'react'
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core'
import styled from 'styled-components';
import axios from 'axios';
import Modal from './modal';

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
    color:#eee;
`
const FormBtn=styled.div`
    margin-top:10px;
`
const mailApi='http://localhost:3000'
class Form extends Component{
    state={
        name:'',
        email:'',
        contact:'',
        message:'',
        status:false,
        process:false
    }

    onTextInput=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    onButtonClick=(event) => {
        this.setState({
            process:true
        })
        event.preventDefault();
        var {name,email,contact,message}=this.state;
        axios.post(`${mailApi}/send`,{name,email,contact,message})
            .then( (res) => {
                this.setState({
                    status:true,
                    process:false
                })
            })
            .catch( (err) => {
                this.setState({
                    status:false,
                    process:false
                })
                alert('Mail failed to deliver ;( Try again. Type correct mail.')
                console.log(err);
            })
    }

    modalHandler=() => {
        this.setState({
            status:!this.state.status
        })
    }
    render(){
        const data=[
            {label:"Name",name:"name",type:"text",helper:"How may I call you?"},
            {label:"Email",name:"email" ,type:"email",helper:"Email won't be used anywhere ;)"},
            {label:"Contact",name:"contact",type:"text",helper:"Mobile number"},
            {label:"Message",name:"message",type:"text",helper:"Write ur message..",multiline:true}
        ]
        return (
            <FormDiv>
                <MainForm onSubmit={this.onButtonClick}>
                    <Modal
                        header={this.state.status ? "Mail sent succesfully!" : "Mail failed to deliver ;("}
                        height='20%'
                        show={this.state.status}
                        click={this.modalHandler}>
                    {
                    this.state.status ?
                    <p>You will be contacted soon. <br/> I hope you've given your actual number ;)</p> :
                    <p>Mail sending failed ;(</p>
                    }   

                    </Modal>
                    {
                        data.map( (input) => {
                            return (
                                <TextField 
                                    value={this.state[input.name]}
                                    margin="normal"
                                    // Don't use Math.random() : https://stackoverflow.com/questions/42573017/in-react-es6-why-does-the-input-field-lose-focus-after-typing-a-character
                                    // key={Math.random()}
                                    variant="outlined"
                                    required 
                                    error={input.error ? true : false}
                                    name={input.name} 
                                    label={input.label}
                                    type={input.type}
                                    helperText={input.helper}
                                    onChange={this.onTextInput}
                                    multiline={input.multiline ? true : false} />
                            )
                        })
                    }
    
                    <FormBtn>
                        <Button 
                            type="submit"
                            variant="contained"
                            color="primary"
                            onClick={this.onButtonClick}
                            disabled={this.state.process ? true : false}
                            >Shoot Mail</Button>
                    </FormBtn>
    
                </MainForm>
            </FormDiv>
        )
    }
}

export default Form;
