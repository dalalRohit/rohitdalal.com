import React from 'react'
import styled from 'styled-components';
import {Link} from 'gatsby';

// import sample from './../../images/sample.jpg';

const Blog=styled.div`
    width:90%;
    margin:0 5% 0 5%;
    max-width:100%;
    display:flex;
    flex-flow:column;
    background-color:#eee;
    min-height:50%;

    &:hover{
        background-color:#e5e5e5;
    }

    @media(max-width:699px){
        flex-flow:${props => props.change ? 'column' : 'row'};
        width:95%;
        margin:0 2.5% 0 2.5%;
        
        main{
            width:100%;
        }
    }
    

`

const Image=styled.div`
    img{
        box-sizing:border-box;
        cursor:pointer;
        width:${props => props.change ? '85%' : '85%'};
        margin:${props => props.change ? '0 7.5% 0 7.5%' : '0 7.5% 0 7.5%'};
        height:300px;
        padding:1.1em;
    }

    @media(max-width:699px){        
        img{
            width:${props => props.change ? '85%' : '180px'};
            height:${props => props.change ? '80%' : '180px'};
            margin:${props => props.change ? '0 7.5% 0 7.5%' : '0%'};

        }
    }
`

const Desc=styled.div`
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



export default function BlogCard(props) {
    const {title,date,img,slug,change}=props;
    return (
        <Blog change={change}>

            <Image change={change}>
                <Link to={`/blogs/${slug}`}>
                    <img 
                        alt={title}
                        title={title}
                        src={img}/>
                </Link>
            </Image>

            <main>
                <Desc>
                    <Link to={`/blogs/${slug}`}><h5>{title}</h5></Link>
                </Desc>

                <p>This is the description of this post</p>

                <Info>
                    <p>{date}</p>
                    <p>2 mins read</p>
                </Info>
            </main>

        </Blog>
    )
}
