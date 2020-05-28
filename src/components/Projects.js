import React from 'react'

import Card from './UI/card';
import Title from './UI/title';
import Layout from './Layout';

import'./../styles/components/projects.scss';
import {ProjectInfo} from './../static/projects';

const Projects=() => {
    const name="Projects";
    return (
        <Layout name={name} id={name}  >  
                <Title path={name} >/projects</Title>

                <p className="projNote">This section is for my projects</p>
                <main className="all-projects">
                    {ProjectInfo.map( (project) => {
                        return (
                            <Card 
                                title={project.name}
                                desc={project.desc}
                                />
                        )
                    })}                
                </main>

        </Layout>
    )
}

export default Projects;

