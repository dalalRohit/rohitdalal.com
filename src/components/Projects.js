import React from 'react'

import Card from './UI/card';
import Title from './UI/title';
import Layout from './Layout';

import classes from './../styles/components/projects.module.scss';
import {ProjectInfo} from './../static/projects';

const Projects=() => {
    const name="Projects";
    return (
        <Layout name={name} id={name}  >  
            <div  className={"Wrapper"}>
                <Title path={name} >/projects</Title>

                <p className={classes.ProjNote}>This section is for my projects</p>
                <main className={classes.Projects}>
                    {ProjectInfo.map( (project) => {
                        return (
                            <Card 
                                title={project.name}
                                desc={project.desc}
                                />
                        )
                    })}                
                </main>
            </div>
        </Layout>
    )
}

export default Projects;

