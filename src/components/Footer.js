import React, { Component } from 'react'

import classes from './../styles/footer.module.scss';

export default class Footer extends Component {
    render() {
        return (
            <div 
                className={classes.Wrapper}
            >
                <p>Rohit Dalal &copy; 2020</p>

                <p>Scroll to top</p>
            </div>
        )
    }
}
