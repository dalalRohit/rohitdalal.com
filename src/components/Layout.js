import React,{Fragment} from 'react'
import {Element} from 'react-scroll';
import './../styles/style.css';


export default function Layout(props) {

    return (
        <Element name={props.name} id={props.name} className="Wrapper" >
            {props.children}
        </Element>
    )
}
