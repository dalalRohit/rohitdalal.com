import React from 'react'
import {IoIosArrowForward,IoIosArrowBack} from 'react-icons/io';;

export default function Arrow(props) {
    const {dir,size,click}=props;
    return (
        <div style={{cursor:'pointer'}}>
            {
                dir==='left' ?
                <IoIosArrowBack  size={size} onClick={click}/> :
                <IoIosArrowForward  size={size} onClick={click}/>
            }
        </div>
    )
}
