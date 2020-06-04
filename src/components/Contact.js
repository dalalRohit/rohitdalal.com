import React, { Component } from 'react'
import  './../styles/components/contact.scss';
import Title from './UI/title';
import Layout from './Layout';
import Form from './UI/Form';
import {FaInstagram,FaLinkedinIn,FaTwitter,FaMediumM,FaGithub} from 'react-icons/fa'
export default class Contact extends Component {

    render() {
        const name="Contact";
        const linkStyles={
            textDecoration:"none",
            color:"inherit"
        }
        return (
            <Layout name={name} id={name} >

                <Title path={name}>/contact</Title>

                <main className="contact">
                    <div className="form">
                        <div className="msg">
                            <p>Can discuss work,football,coffee ;)</p>
                            <p>Wanna colaborate?</p>
                        </div>
                        <Form  theme={this.props.theme}/>
                    </div>

                    <div className="social">
                        <h2>Social</h2>
                        <p>You can reach to me here</p>
                        <div className="icons">
                            <li>
                                <a rel="noopener noreferrer" title="Instagram" alt="Instagram" href="https://www.instagram.com/rohit__dalal/" target="_blank" style={linkStyles} >
                                    <FaInstagram size={"40px"} />
                                </a> 
                            </li>
                            <li>
                                <a rel="noopener noreferrer" title="LinkedIn" alt="LinkedIn" href="https://www.linkedin.com/in/rohit-dalal-61330116b/" target="_blank" style={linkStyles}>
                                     <FaLinkedinIn size={"40px"} /> 
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" title="Twitter" alt="Twitter" href="https://twitter.com/dalal__rohit" target="_blank" style={linkStyles}> 
                                    <FaTwitter size={"40px"} />
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" title="Medium" alt="Medium" href="https://medium.com/@rohit_dalal" target="_blank" style={linkStyles}>
                                     <FaMediumM size={"40px"} />
                                 </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" title="GitHub" alt="GitHub" href="https://github.com/dalalRohit" target="_blank" style={linkStyles}>
                                     <FaGithub size={"40px"} />
                                 </a>
                            </li>
                        </div>
                    </div>
                
                </main>



            </Layout>
        )
    }
}
