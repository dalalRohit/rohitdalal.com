import React from 'react';

import { Element } from "react-scroll";
import {Link} from 'gatsby';
import {Button} from '@material-ui/core'

const Home=(props) => {

    const name = "Home";

    return (
        <Element name={name} id={name} >
            <div className="hero" >
                
                    <div className="my-info">

                        <div className="brand">
                            <h1> Namaste, I'm Rohit <span role="img" aria-label="folded hands">🙏 </span> </h1>
                        </div>

                        <div className="my-intro">
                            <p>
                                Full stack web developer. I develop websites, web-apps.
                                I also like to write about web-dev, JavaScript in general. <br/>
                                <Button>
                                    <Link to="/blogs/" >Read my blogs</Link>
                                </Button>
                            </p>
                        </div>

                    </div>

            </div>
        </Element>
    )
}


export default Home