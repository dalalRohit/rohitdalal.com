import React,{Component} from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Modal from './modal';
import PropTypes from 'prop-types';

const CardDiv=styled.div`
    width:90%;
    margin:0 5% 0 5%;
    max-width:100%;
    min-height:200px;
    box-sizing:border-box;
    border:1px solid lightgray;
    padding:1em;
    font-size:1.15rem;
    display:flex;
    flex-flow:column;
    align-items:center;
    justify-content:space-around;

    h3{
        border-bottom:1px solid plum;
    }
    p{
        padding:.8rem;
    }
    &:hover{
        outline:2px solid gray;
    }

    button{
        &:hover{
            background:#0ba4b8;
        }
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
        const {title,tags,html,desc} = this.props;
        return (
            <div>
                <Modal 
                    header={title}
                    show={this.state.modal}
                    click={this.modalHandler}
                    height='70%'
                    >
                    
                    <div dangerouslySetInnerHTML={{__html:html}} >

                    </div>
                </Modal>

                <CardDiv >
                    <div>
                        <h3>{title}</h3>
                        <p>{desc}</p>
                    </div>

                    <div>
                        <Button onClick={this.modalHandler} disableElevation variant="contained">See more</Button>
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
