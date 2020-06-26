import React from 'react';
import './../styles/style.scss';


const Sample=(props) => {
    
    return(
        <div className="layout">
            <header style={{position:'fixed',top:'0',left:'0'}}> HEADER </header>

            <main style={{position:'absolute',top:"20px"}}>MAIN</main>


            <footer style={{position:'absolute',bottom:'0'}}>FOOTER</footer>
        </div>
    )
}

export default Sample;
