import React,{Component} from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Modal from './modal';
import PropTypes from 'prop-types';

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

                <CardDiv >
                    <div>
                        <h3>{this.props.title}</h3>
                        <p>{this.props.desc}</p>
                    </div>

                    <div style={{display:'flex',}}>
                        <Button disableElevation variant="contained">See more</Button>
                    </div>
                </CardDiv>

            </div>
        )
    }

}
export default Card;

// Card.PropTypes={
//     title:PropTypes.string
// }
