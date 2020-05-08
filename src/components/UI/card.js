import React,{Component} from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Modal from './modal';

const CardDiv=styled.div`
    width:90%;
    margin:0 5% 0 5%;
    max-width:100%;
    box-sizing:border-box;
    border:1px solid lightgray;
    padding:1em;
    font-size:1.2rem;
    display:flex;
    flex-flow:column;
    align-items:center;
    justify-content:space-around;
    cursor:pointer;

    h4{
        border-bottom:2px solid plum;
    }
    &:hover{
        outline:2px solid gray;
    }


`
 class Card extends Component 
{
    state={
        modal:false
    }

    modalHandler=() => {
        this.setState({
            modal:!this.state.modal
        })
    }
    render(){
        return (
            <div>
                <Modal 
                    header={this.props.title}
                    show={this.state.modal}
                    click={this.modalHandler}
                    height='70%'
                    >
                    
                    <div dangerouslySetInnerHTML={{__html:this.props.html}} >

                    </div>
                </Modal>

                <CardDiv onClick={this.modalHandler} >
                    <h4>{this.props.title}</h4>
                    <p dangerouslySetInnerHTML={{__html:this.props.excerpt}} ></p>

                    <div style={{display:'flex',}}>
                        <Button  onClick={this.modalHandler} disableElevation variant="contained">See more</Button>
                        
                    </div>
                </CardDiv>

            </div>
        )
    }

}
export default Card;
