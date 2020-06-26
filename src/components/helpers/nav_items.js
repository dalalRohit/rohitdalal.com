import React from 'react'
import {Link} from 'gatsby';
import PropTypes from 'prop-types';

export default function NavItems(props) {

    let links=['About',props.changeBlog ? 'Blogs' : 'Blog','Projects','Contact']
    

    return (
        <ul className="ul">
            {
                links.map( (link) => {
                    return (
                        <li className="nav-link hvr-underline-from-left" key={Math.random()}>
                            {
                                props.scroll ?
                               
                                <a href={`#${link}`} className="" aria-label={link} > 
                                    {link} 
                                </a> :
                            
                                <Link to={link==='Blogs' ? `/${link.toLowerCase()}` : `/#${link}` } >  
                                    {link} 
                                </Link>
                            }
                        </li>
                    )
                })
            }
            
        </ul>
    )
}

NavItems.propTypes={
    display:PropTypes.string, //to spread Links horizontally or column wise
    scroll:PropTypes.bool, //To check if to use 'react-scroll' or normal Link

}


