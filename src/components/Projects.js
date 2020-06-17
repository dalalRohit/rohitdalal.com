import React from 'react'
import {useStaticQuery,graphql} from 'gatsby';
import Card from './UI/card';
import Title from './UI/title';
import Layout from './Layout';


const Projects=() => {
    const name="Projects";

    const data=useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                  node{
                    frontmatter{
                      title,
                      tags,
                      desc
                    },
                    html
                  }
                }
              }
        }
    `);
    
    return (
        <Layout name={name} id={name}  >  
                <Title path={name} >/projects</Title>

                <p className="projNote">My recent work done and many more coming ..</p>
                <main className="all-projects">
                    {   
                        data.allMarkdownRemark.edges.map( (edge) => {
                            const {title,tags,desc} = edge.node.frontmatter;
                            const {html}=edge.node;
                            return (
                                <Card
                                    key={Math.random()} 
                                    title={title}
                                    tags={tags}
                                    desc={desc}
                                    html={html}
                                />
                            )
                        })
                    }                
                </main>

        </Layout>
    )
}

export default Projects;

