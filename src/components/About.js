import React, { Component } from 'react'
import Layout from './Layout';

import classes from './../styles/components/about.module.scss';
import {config} from './../static/data';
import Photo from './UI/image';
import Title from './UI/title';

export default class About extends Component {

    render() {
        const name="About";

        return (
            <Layout name={name} id={name}>

                <div className="Wrapper" >

                <Title path={name}>/about</Title>
                
                <section className={classes.About}>

                    <div className={classes.Info}>
                        
                        <div className={classes.Photo}>
                            <Photo fluid={this.props.fluid} />
                        </div>
                        
                        <div className={classes.Desc}>
                            <p dangerouslySetInnerHTML={{__html:config.about}}></p>
                        </div>
                    </div>

                    <div className={classes.Skills}>
                        <div>
                            <h2>What I do?</h2>
                            <ul>
                                <li>Web devlopement</li>
                                <li>Front end</li>
                                <li>Back end</li>
                            </ul>
                        </div>

                        <div>
                            <h2>Tech Stack </h2>
                            <ul>
                                <li>React</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                            </ul>
  
                        </div>
                        <div>
                            <h2>What I use? </h2>
                            <ul>
                                <li>Web devlopement</li>
                                <li>Front end</li>
                                <li>Back end</li>
                            </ul>
  
                        </div>
                    </div>

                </section>
            </div>
            
            </Layout>
        )
    }
}
