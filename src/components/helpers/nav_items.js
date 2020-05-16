import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import {Link as ScrollLink} from 'react-scroll';

const Li=styled.li`
    box-sizing:border-box;
    margin:0;
    font-size:1.23em;
    cursor:pointer;
    a{
        padding:.2em;
        text-decoration:none,
    }
    a:hover{
        color:inherit;
        border-bottom:2px solid plum;
    }

`
const Ul=styled.ul`
    width:100%;
    box-sizing:border-box;
    margin-top:15px;
    height:5vh;
    min-height:5vh;
    display:flex;
    justify-content:center;
    align-items:center;
    li{
        list-style-type:none;
        margin:.4em;
    }

    @media(max-width:699px){
        flex-flow:${ props => props.display };
        margin:0;
        height:100%;
        margin-top:0;
        li{
            margin:.5em;
        }
    }
`
export default function NavItems(props) {

    let links=['About',props.changeBlog ? 'blogs' : 'Blog','Projects','Contact']
    
    const scrollProps={
        offset:props.offset,
        smooth:true,
        spy:true,
        duration:500,
        isDynamic:true,
    }


    return (
        <Ul>
            {
                links.map( (link) => {
                    return (
                        <Li key={Math.random()}>
                            {
                                props.scroll ?
                               
                                <ScrollLink 
                                    {...scrollProps}
                                    to={`${link}`}
                                    > {link} </ScrollLink> :
                            
                                <Link  to={link==='blogs' ? `/${link}` : `/#${link}` } >  {link} </Link>
                            }
                        </Li>
                    )
                })
            }
            
        </Ul>
    )
}

NavItems.propTypes={
    display:PropTypes.string, //to spread Links horizontally or column wise
    scroll:PropTypes.bool, //To check if to use 'react-scroll' or normal Link

}


