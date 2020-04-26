import React from 'react'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io';;

export default function Arrow(props) {
    const {dir,size,click,limit,index}=props;
    return (
        <div style={{cursor:'pointer'}}>
            {
                dir==='left' ?
                <IoIosArrowBack  size={size} onClick={click} style={{display:index===limit ? 'none' : 'block'}} /> :
                <IoIosArrowForward  size={size} onClick={click} style={{display: index===limit ? 'none' : 'block' }}/>
            }
        </div>
    )
}
