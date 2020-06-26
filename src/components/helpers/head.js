import React from 'react'
import {Helmet} from 'react-helmet';

export default function Head(props) {
    return (
        <>
            <Helmet 
                title={`${props.title} | ${props.info}  `} />
        </>
    )
}
