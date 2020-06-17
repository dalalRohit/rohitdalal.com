import React from 'react'
import {Link} from 'gatsby';

import {getAllTags} from './../../static/data';


export default function BlogFilter(props) {

    // const data=useStaticQuery(graphql`
    //     query{
    //         allMdx{
    //             edges{
    //                 node{
    //                     frontmatter{
    //                         title,
    //                         slug,
    //                         tags,
    //                         date,
    //                     },
    //                     featuredImg{
    //                         childImageSharp{
    //                             fluid(maxWidth:300,maxHeight:200){
    //                                 ...GatsbyImageSharpFluid_tracedSVG
    //                             }
    //                         }
                            
    //                     }
    //                     excerpt,
    //                     body
    //                 }
    //             }
    //         },
    //     }
    // `)

    let allTags=getAllTags(props.data);

    

    return (
        <div className="filter">
            <h1>All blogs</h1>
            <h3>Filter blogs by categories</h3>

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
