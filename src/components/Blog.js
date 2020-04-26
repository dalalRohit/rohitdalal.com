import React from 'react'
import classes from './blog.module.css';
import {Link,graphql,useStaticQuery} from 'gatsby';
import AllBlogs from './AllBlogs';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogCard from './UI/blog_card';

export default function Blog() {
    const data=useStaticQuery(graphql`
    {
        contentful:allContentfulBlogPost (
            sort:{
                fields:publishedDate,
                order:DESC
        })
        {
            edges{
                node{
                    title,
                    slug,
                    publishedDate (formatString:"MMMM Do, YYYY")
                }
            }
        },
        assets:allContentfulAsset (sort:{
            fields:title,
            order:DESC
            })
            {
                nodes{
                    file{
                    url
                }
            }
        }
    }

`)
    const name="Blog";
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <div id={name} className={classes.Wrapper}>
            <h1>/blog</h1>
            <p>Recently published blogs..</p>            

            <div className={classes.BlogCarousel}>
                <Carousel 
                    responsive={responsive}
                    arrows
                    showDots
                    swipeable

                >
                    {
                        data['contentful'].edges.map( (edge,i) => {
                            console.log(edge);
                            return (
                                <BlogCard
                                    key={Math.random()}
                                    title={edge.node.title}
                                    slug={edge.node.slug}
                                    date={edge.node.publishedDate}
                                    img={data.assets.nodes[i].file.url}
                                />
                            )
                        })
                    }
                </Carousel>
            </div>

            <footer>
                <Link to={`/blogs`}>
                    See all blogs
                </Link>
            </footer>
        </div>
    )
}
