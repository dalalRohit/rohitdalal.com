import React, { Component } from 'react'
import Layout from './Layout';

import classes from './../styles/about.module.scss';

import Photo from './UI/image';
import Title from './UI/title';

export default class About extends Component {

    render() {
        const name="About";

        return (
            <Layout name={name} id={name}>

                <div className={"Wrapper"} >

                <Title path={name}>/about</Title>
                
                <main className={classes.About}>

                    <div className={classes.Info}>
                        
                        <div className={classes.Photo}>
                            <Photo />
                        </div>
                        
                        <div className={classes.Desc}>
                            <p> 
                                Hello people, myself Rohit Dalal. Nice to see you here <br/>
                                I do <code>WebDev</code> projects in <code>Node.js</code>, <code>React.js</code>, <code>MongoDB </code> 
                                <br/>
                                I also love Competetive Programming, which I do in <code>C++</code>. <br/> 
                                I like                   
                            </p>
                        </div>
                    </div>

                    <div className={classes.Skills}>
                        <div>
                            <h3>What I do?</h3>
                            <ul>
                                <li>Web devlopement</li>
                                <li>Competetive Programming</li>
                                <li>Front end</li>
                                <li>Back end</li>
                            </ul>
                        </div>

                        <div>
                            <h3>What I use? </h3>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
  
                        </div>
                    </div>

                </main>
            </div>
            
            </Layout>
        )
    }
}
