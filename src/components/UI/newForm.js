import React, { Component } from 'react'

export default class NewForm extends Component {
    state={
        name:'',
        email:'',
        contact:'',
        message:''
    }
    onTextInput=(e) => {
        this.setState({
            [e.target.name]:e.target.value
        })

    }
    render() {  
        const data=[
            {label:"Name",name:"name",helper:"How may I call you?"},
            {label:"Email",name:"email" ,helper:"Email won't be used anywhere ;)"},
            {label:"Contact",name:"contact",helper:"Mobile number"},
            {label:"Message",name:"message",helper:"Write ur message..",multiline:true}
        ]
        return (
            <div>
                {
                    data.map( (input) => {
                        return (
                            <input 
                                value={this.state[input.name]}
                                // key={Math.random()}
                                required 
                                name={input.name} 
                                onChange={this.onTextInput}
                                type="text"
                            />
                        )
                    })
                }
            </div>
        )
    }
}
