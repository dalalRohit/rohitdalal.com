import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import {Link as ScrollLink} from 'react-scroll';


const Li=styled.li`
    box-sizing:border-box;
    margin:0;
    cursor:pointer;
    font-size: 1.25rem;
    color:inherit;
    border-radius:2px;
    a{
        padding:.1em;
    }
    a:hover{
        color:#0ba4b8;
    }

    @media screen and (max-width:800px){
        font-size:1.1rem;
    }

    @media screen and (max-width:620px){
        font-size:1rem;
    }

`
const Ul=styled.ul`
    width:100%;
    box-sizing:border-box;
    height:6vh;
    min-height:6vh;
    display:flex;
    justify-content:center;
    align-items:center;
    li{
        list-style-type:none;
        margin:.4em;
    }

    @media(max-width:700px){
        margin:0;
        height:100%;
        margin-top:0;
        li{
            margin:.5em;
        }
    }
`
export default function NavItems(props) {

    let links=['About',props.changeBlog ? 'Blogs' : 'Blog','Projects','Contact']
    
    const scrollProps={
        offset:props.offset,
        smooth:true,
        spy:true,
        duration:500,
        isDynamic:true,
    }

    //https://stackoverflow.com/questions/44375093/handling-scroll-animation-in-react
    const click=(link) => {
        document.querySelector(`#${link}`).scrollIntoView({ behavior: 'smooth' });
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
                                    // onClick={() => click(link)}
                                    {...scrollProps}
                                    to={link}
                                    > 
                                    {link} 
                                </ScrollLink> :
                            
                                <Link  to={link==='Blogs' ? `/${link.toLowerCase()}` : `/#${link}` } >  {link} </Link>
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


