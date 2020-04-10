import React, { Component } from 'react'
import classes from './projects.module.css';
import Card from './UI/card';
import {graphql,useStaticQuery} from 'gatsby';

const Projects=() => {
    const name="Projects";

    const projects=useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title,
                            date
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
            <h1>/projects</h1>
            <main className={classes.Projects}>

                {projects.allMarkdownRemark.edges.map( (project) => {
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

