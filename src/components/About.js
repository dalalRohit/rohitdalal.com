import React, { Component } from 'react'
import Layout from './Layout';

import {config} from './../static/data';
import Photo from './UI/image';
import Title from './UI/title';

export default class About extends Component {

    render() {
        const name="About";

        return (
            <Layout name={name} id={name}>

                <Title path={name}>/about</Title>
                
                <section className="about">

                    <div className="myinfo">
                        
                        <div className="my-photo">
                            <Photo fluid={this.props.fluid} />
                        </div>
                        
                        <div className="my-desc">
                            <p dangerouslySetInnerHTML={{__html:config.about}}></p>
                        </div>
                    </div>

                    <div className="my-skills">
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
                                <li>Node.js / Express</li>
                                <li>MongoDB </li>
                                <li>Gatsby </li>
                            </ul>
  
                        </div>
                        <div>
                            <h2>Non-work </h2>
                            <ul>
                                <li>Football <span role="img" aria-label="football">⚽</span> </li>
                                <li>Music <span role="img" aria-label="music" >🎧 </span> </li>
                                <li>Coffee <span role="img" aria-label="coffee" >☕ </span> </li>
                                <li>Sleep <span role="img" aria-label="sleep" >💤 </span> </li>
                                <li>Chess <span role="img" aria-label="chess" >♟️ </span>  </li>
                            </ul>
  
                        </div>
                    </div>

                </section>
            
            </Layout>
        )
    }
}
