import React from 'react'
import {Link} from 'react-scroll';
import {Link as LinkItem} from 'gatsby';
import logo from './../../images/logo.svg';



const myLogo=(
    <div className="logo">
        <span>Rohit Dalal</span>
        <img src={logo} />
    </div>
)
export default function Logo(props) {

    return (
        <div className='logo-wrapper'>
            {
                props.scroll 
                ? 
                
                <Link 
                    to="Home"
                    smooth
                    duration={300}
                >
                    {myLogo}
                </Link> 

                :
                
                <LinkItem to="/">
                    {myLogo}
                </LinkItem>

            }

        </div>
    )
}
