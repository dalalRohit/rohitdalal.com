import React from 'react'
import {Helmet} from 'react-helmet';

export default function Head(props) {
    return (
        <div>
            <Helmet title={`Rohit Dalal |${props.info}  `} />
        </div>
    )
}
