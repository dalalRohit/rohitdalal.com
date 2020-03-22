import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-scroll';
import {IoMdHeart} from 'react-icons/io'
import {MdKeyboardArrowUp} from 'react-icons/md'

const Footer=styled.footer`
    width:100%;
    max-width:100%;
    background-color:black;
    padding:.2em;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export default function footer() {
    return (
        <Footer>

            <p>Designed and coded with <IoMdHeart /> </p>
            
            <Link
                to={"Home"}
                smooth={true}
                duration={500}>
                <MdKeyboardArrowUp size={'30px'} />
            </Link>
        </Footer>
    )
}
