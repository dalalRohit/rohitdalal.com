import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';

// import sample from './../../images/sample.jpg';

const Blog=styled.div`
    width:100%;
    height:100%;
    min-height:100%;
    max-width:100%;
    box-sizing:border-box;
    display:flex;
    flex-flow:column;
    justicy-content:space-between;
    align-items:center;
    padding:.4em;
    background-color:#eee;
    img{
        cursor:pointer;
        width:100%;
        height:100%;
        padding:1em;
    }

    &:hover{
        background-color:#e0e0e0;
    }
`

const Desc=styled.main`
    width:100%;
    box-sizing:border-box;
    margin-top:1em;
    padding:.34em;
    // border:1px solid red;

    a{
        color:inherit;
        text-decoration:none;
        text-transform:none;
    }

`

const Info=styled.div`
    width:100%;
    box-sizing:border-box;
    margin-top:.5em;
    padding:.34em;
    display:flex;
    justify-content:space-between;
    align-items:center;
    font-size:.79em;

    p{
        font-size:.89rem;

    }
`

const Tag=styled.div`
    border:1px solid green;
    display:flex;

`
export default function BlogCard(props) {
    const {title,date,img,slug}=props;
    return (
        <Blog>
            <div>
                <Link to={`/blogs/${slug}`}>
                    <img 
                        alt={title}
                        title={title}
                        src={img}/>
                </Link>
                
            </div>
            
            <Desc>
                <Link to={`/blogs/${slug}`}><h5>{title}</h5></Link>
            </Desc>

            <Info>
                <p>{date}</p>
                <p>javaScript</p>
                <p>2 mins read</p>
            </Info>
        </Blog>
    )
}
