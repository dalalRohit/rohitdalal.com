import React,{Component} from 'react'
import Input from './Input';
import {Button} from '@material-ui/core'
import styled from 'styled-components';
import axios from 'axios';
import Modal from './modal';

const FormDiv=styled.div`
    box-sizing:border-box;
    width:100%;
    max-width:100%;
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

    button{
        background:#00adb5;        
        &:hover{
            background:#08d9d6;
        }
    }
    button:disabled{
        cursor:none;
    }

`
const mailApi='https://rohitmailapi.herokuapp.com/send';

class Form extends Component{
    
    state={
        name:"",
        email:"",
        contact:"",
        message:"",
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

        if(name==="" || email==="" || contact==="" || message===""){
            alert("Enter all data ;)");
            this.setState({
                process:false
            })
            return;
        }
        else{
            axios.post(`${mailApi}`,{name,email,contact,message},{
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              })
                .then( (res) => {
                    console.log(res);
                    this.setState({
                        status:true,
                        process:false
                    })
                })
                .catch( (err) => {
                    console.log(err);
                    this.setState({
                        status:false,
                        process:false
                    })
                    alert('Email sending failed. Try again please ;)')
                })
        }
        

    }

    modalHandler=() => {
        this.setState({
            status:!this.state.status
        })
    }
    render(){
        const data=[
            {id:1,label:"Your Name",name:"name",type:"text"},
            {id:2,label:"Your Email",name:"email" ,type:"email",},
            {id:3,label:"Your Contact",name:"contact",type:"tel",},
            {id:4,label:"Your Message",name:"message",type:"text",multiline:true}
        ];

        return (
            <FormDiv>
                <MainForm onSubmit={this.onButtonClick} netlify>
                    <Modal
                        header={this.state.status ? "Mail sent succesfully!" : "Mail failed to deliver ;("}
                        height='20%'
                        show={this.state.status}
                        click={this.modalHandler}>
                    
                    {
                        this.state.status ?
                        <p>You will be contacted soon. <br/> I hope you've given your actual number and mail  ;)</p> :
                        <p>Mail sending failed ;(</p>
                    }   

                    </Modal>
                    
                    <div style={{textAlign:'center'}} >
                    <input type="hidden" value="something" />
                        {
        
                            data.map( (input) => {
                                return (
                                    <Input
                                        key={input.id}
                                        value={this.state[input.name]}
                                        error={input.error}
                                        name={input.name}
                                        label={input.label}
                                        type={input.type}
                                        inputChange={this.onTextInput}
                                        multiline={input.multiline}

                                        />
                                )
                            })
                        }
        
                        <FormBtn>
                            <Button 
                                type="submit"
                                onClick={this.onButtonClick}
                                disabled={this.state.process===true ? true : false }
                                >{this.state.process===true ? "Sending... " : "Shoot mail" }
                                </Button>
                        </FormBtn>
                    </div>
    
                </MainForm>
            </FormDiv>
        )
    }
}

export default Form;
