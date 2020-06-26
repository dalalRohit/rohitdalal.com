import React from 'react'
import {Link} from 'gatsby';

import {getAllTags} from './../../static/data';


export default function BlogFilter(props) {


    let allTags=getAllTags(props.data);

    

    return (
        <div className="filter">
            <h1>All blogs</h1>
            <p>Filter blogs by categories</p>

            <div className="filtertags">
                {Object.keys(allTags).map( (tag) => {
                    return (
                        <span className={"Tag"} key={Math.random()}>
                            <Link to={`/tags/${tag}`}>
                                {tag} <span className="blogcount">{allTags[tag]}</span>
                            </Link>
                        </span>
                    )
                })}
            </div>

        </div>
    )
}
