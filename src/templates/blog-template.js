import React from 'react'
import Head from './../components/helpers/head';

import PageLayout from './../components/pageLayout';

import classes from './blogtemplate.module.scss';
import {graphql,Link} from 'gatsby';

import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'



export const query=graphql`
  query($slug:String) {
    contentfulBlogs(slug:{eq:$slug}){
      title,
      publishedDate (formatString:"MMMM Do, YYYY"),
      description
      content{
        json
      },
      tags,
      image{
        title,
        file{
          url
        },
        description
      }
    }
  }
`
export default function BlogTemplate(props) {


  const options={
      renderNode:{
        //embedded-asset-block contains images
        [BLOCKS.EMBEDDED_ASSET] : (node) => {
          // console.log(JSON.stringify(node,undefined,4));
          const alt=node.data.target.fields.title['en-US'];
          const url=node.data.target.fields.file['en-US'].url;
          const details=node.data.target.fields.file['en-US'].details;
          const {width,height}=details.image;
          return <img alt={alt} src={url}  />
        },
      }
  }
    return (

          <PageLayout 
            scroll={false}
            gradient={false}
            changeBlog={true}
            >

            <Head title={props.data.contentfulBlogs.title} info={"Rohit Dalal"} />

            <div className={classes.Wrapper}>

                {/* Contentful post render */}
                <article className={classes.Content}>
                  
                  <div className={classes.Info}>
                    <h1>{props.data.contentfulBlogs.title}</h1>
                    <time> {props.data.contentfulBlogs.publishedDate}   </time>

                    <div className={classes.Tags}>
                        {props.data.contentfulBlogs.tags.map( (tag) => {
                          return (
                            <span>
                              <Link  to={`/tags/${tag}`} key={Math.random()} >{tag}</Link>
                            </span>
                          )
                        })}
                    </div>

                  </div>
                  
                  <main className={classes.Data}>
                  {
                    documentToReactComponents(props.data.contentfulBlogs.content.json,options)
                  }
                  </main>
                
                </article>

                
            </div>
          
          </PageLayout>

    )
}
