import React, { Component } from 'react'

import classes from './../styles/footer.module.scss';

export default class Footer extends Component {
    render() {
        return (
            <div 
                className={classes.Wrapper}
            >
                <p>Rohit Dalal &copy; {new Date().getFullYear()} </p>

                <p>Scroll to top</p>
            </div>
        )
    }
}
