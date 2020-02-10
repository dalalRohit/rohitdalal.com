import React, { Component } from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import classes from './home.module.css';
import Header from './Header';
import Image from './Image';

class Home extends Component {
    render() {
        return (
            <div className={classes.Container}>
                <Header />

                <div className={classes.Main}>
                    <div className={classes.Home}>
                        <div>
                            <h1>ROHIT <br /> DALAL</h1>
                        </div>
                        <div>
                            <Image />
                        </div>
                    </div>

                    <div className={classes.Arrow}>
                        <IoIosArrowDown size={'30px'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home