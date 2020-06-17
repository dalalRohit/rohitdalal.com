import React from 'react';
import Head from './../components/helpers/head';
import PageLayout from './../components/pageLayout';
import {getAllTags} from './../static/data';
import {useStaticQuery,graphql,Link} from 'gatsby';
import styled from 'styled-components';
import {IoMdArrowBack} from 'react-icons/io';

const TagsContainer=styled.div`
    width:100%;
    max-width:100%;
    min-height:70vh;
    padding:4rem 0 0 0;

    @media(max-width:620px){
        padding:4rem 0 0 0;
    }
    a p{
        font-size:1.2rem;
    }

    .alltags{
        box-sizing: border-box;
        width: 100%;
        padding: .1em;
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(90px,1fr));
        span{
            font-size: 16px;
        }
        @media screen and (max-width:620px){
            width: 100%;
        }
    }
`
const Tags=() => {
    const data=useStaticQuery(graphql`
        query{
            allMdx{
                edges{
                    node{
                        frontmatter{
                            tags
                        }
                    }
                }
            }
        }
    `)
    const allTags=getAllTags(data);

    return (
        <PageLayout  scroll={false} changeBlog={true} >
            <Head title={"Blogs Categories"} info={"Rohit Dalal"} />
            
            <TagsContainer>

                <Link to={`/blogs/`}>
                    <p> <IoMdArrowBack /> Check my all blogs </p>
                </Link>

                <h1>Check all blogs categories</h1>

                <div className="alltags">
                    {Object.keys(allTags)
                        .map( (tag) => {
                            return (
                                <span className={"Tag"} key={Math.random()}>
                                    <Link to={`/tags/${tag}`}>{tag} {allTags[tag]}</Link>
                                </span>
                            )
                        })}
                </div>
            </TagsContainer>
        </PageLayout>
    )
};

export default Tags;