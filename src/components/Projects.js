import React, { Component } from 'react'
import classes from './projects.module.css';
import Card from './UI/card';
import {graphql,useStaticQuery} from 'gatsby';
import fm from 'front-matter';
import Title from './UI/title';

const Projects=() => {
    const name="Projects";
    const projects=useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title,
                            date,
                        },
                        html,
                        excerpt
                    }
                }
            }
        }
    `)

    return (
        <div id={name} className={classes.Wrapper}>
            <Title path={name}>/projects</Title>
            <main className={classes.Projects}>

                {projects.allMarkdownRemark.edges.map( (project,i) => {
                    return (
                            <Card 
                                key={Math.random()}
                                title={project.node.frontmatter.title}
                                content={project.node.excerpt}
                                html={project.node.html}
                            />
                    );
                })}
            
            </main>
        </div>
    )
}

export default Projects;

