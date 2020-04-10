import React,{Component} from 'react'
import styled from 'styled-components';
// import sample from './../../images/proj-2.png';
import Button from '@material-ui/core/Button';
import Modal from './modal';

const CardDiv=styled.div`
    width:90%;
    margin:0 5% 0 5%;
    height:300px;
    max-width:100%;
    box-sizing:border-box;
    border:1px solid purple;
    padding:1em;
    background-size:cover;
    background-repeat:no-repeat;
    blur:10px;
    display:flex;
    flex-flow:column;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    background-color:#eee;
    outline:solid 3px gray;
    &:hover{
        outline-width:5px;
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
                    click={this.modalHandler}>
                    <div dangerouslySetInnerHTML={{__html:this.props.html}} >

                    </div>
                </Modal>

                <CardDiv onClick={this.modalHandler}>
                    <p>{this.props.title}</p>
                    <Button  onClick={this.modalHandler} disableElevation variant="contained">See more</Button>
                </CardDiv>

            </div>
        )
    }

}
export default Card;
