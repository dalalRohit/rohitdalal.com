export const blogsByTag=`    query($tag:String){
    allMdx(
        filter:{frontmatter:{tags:{in:[$tag]}}}
    ){
        edges{
            node{
                frontmatter{
                    title,
                    published,
                    date,
                    slug,
                    featuredImage{
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                src
                            }
                        }
                    }
                    tags
                },
                excerpt,
                body,
                timeToRead
            }
        }
    }
}`