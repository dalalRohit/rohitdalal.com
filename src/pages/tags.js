import React from 'react';
import Head from './../components/helpers/head';
import PageLayout from './../components/pageLayout';
import {getAllTags} from './../static/data';
import {useStaticQuery,graphql,Link} from 'gatsby';
import styled from 'styled-components';

const TagsContainer=styled.div`
    width:100%;
    max-width:100%;
    min-height:70vh;
    padding:4rem;

    span{
        margin:2em;
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
        <PageLayout>
            <Head title={"Blogs Categories"} info={"Rohit Dalal"} />
            <h1>Check all blogs categories</h1>
            
            <TagsContainer>
                {Object.keys(allTags)
                    .map( (tag) => {
                        return (
                            <span className={"Tag"} key={Math.random()}>
                                <Link to={`/tags/${tag}`}>{tag} {allTags[tag]}</Link>
                            </span>
                        )
                    })}
            </TagsContainer>
        </PageLayout>
    )
};

export default Tags;