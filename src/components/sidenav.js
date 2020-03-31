import React from 'react'
import Backdrop from './UI/backdrop';
import classes from './sidenav.module.css';
import Logo from './UI/logo';
import NavItems from './nav_items';
import {FaHeart} from 'react-icons/fa';

export default function Sidenav(props) {
    let attachedClasses = [classes.Sidenav, classes.Close];
    if (props.show) {
        attachedClasses = [classes.Sidenav, classes.Open];
    }
    return (
        <div>
            <Backdrop  
                show={props.show}
                click={props.click}
                />

            <div className={attachedClasses.join(' ')}>
                
                <div className={classes.Logo} >
                    <Logo />
                </div>
  
                <div className={classes.NavItems}>
                    <NavItems click={props.click} offset={-58.49}/>
                </div>

                <div className={classes.Info}>
                    <p>Designed and coded with <FaHeart /> </p>
                </div>
            </div>
        </div>
    )
}
