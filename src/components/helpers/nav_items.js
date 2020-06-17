import React from 'react'

import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import {Link as ScrollLink} from 'react-scroll';

export default function NavItems(props) {

    let links=['About',props.changeBlog ? 'Blogs' : 'Blog','Projects','Contact']
    
    const scrollProps={
        offset:props.offset,
        smooth:true,
        spy:true,
        duration:300,
        isDynamic:true,
    }

    
    /*
        //https://stackoverflow.com/questions/44375093/handling-scroll-animation-in-react
        const click=(link) => {
            document.querySelector(`#${link}`).scrollIntoView({ behavior: 'smooth' });
        }
    */
    return (
        <ul className="ul">
            {
                links.map( (link) => {
                    return (
                        <li className="nav-link" key={Math.random()}>
                            {
                                props.scroll ?
                               
                                <ScrollLink 
                                    // onClick={() => click(link)}
                                    {...scrollProps}
                                    to={link}
                                    > 
                                    {link} 
                                </ScrollLink> :
                            
                                <Link  to={link==='Blogs' ? `/${link.toLowerCase()}` : `/#${link}` } >  {link} </Link>
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


