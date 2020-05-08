import React from 'react'
import {graphql,useStaticQuery} from 'gatsby';

import Card from './UI/card';
import Title from './UI/title';
import Layout from './Layout';

import classes from './../styles/projects.module.scss';
import {ProjectInfo} from './../static/projects';

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
                        excerpt,
                        timeToRead
                    }
                }
            }
        }
    `)

    return (
        <Layout name={name} id={name}  >  
            <div  className={"Wrapper"}>
                <Title path={name} >/projects</Title>

                <p className={classes.ProjNote}>This section is for my projects</p>
                <main className={classes.Projects}>

                    {projects.allMarkdownRemark.edges.map( (project,i) => {
                        return (
                                <Card 
                                    key={Math.random()}
                                    title={project.node.frontmatter.title}
                                    excerpt={project.node.excerpt}
                                    html={project.node.html}
                                />
                        );
                    })}
                
                </main>
            </div>
        </Layout>
    )
}

export default Projects;

