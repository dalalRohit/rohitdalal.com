import React from 'react'
import Head from './../components/helpers/head';
import BlogHeader from './../components/helpers/blog-header';
import BlogFooter from './blog-footer';

import classes from './blogtemplate.module.css';
import {graphql,Link} from 'gatsby';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'

// Dark theme settings
import {ThemeProvider} from 'styled-components';
import {GlobalStyles,lightTheme,darkTheme} from './../components/global';
import {useDarkMode} from './../components/helpers/useDarkmode';

export const query=graphql`
  query($slug:String) {
    contentfulBlogPost(slug:{eq:$slug}){
      title,
      publishedDate (formatString:"MMMM Do, YYYY"),
      description{
        json
      },
      body{
        json
      }
    }
  }
`
export default function BlogTemplate(props) {
  const [theme,toggleTheme, componentMounted]=useDarkMode();
  if (!componentMounted) {
    return <div />
  };
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const options={
      renderNode:{
        "embedded-asset-block" : (node) => {
          // console.log(JSON.stringify(node,undefined,4));
          const alt=node.data.target.fields.title['en-US'];
          const url=node.data.target.fields.file['en-US'].url;
          const details=node.data.target.fields.file['en-US'].details;
          const {width,height}=details.image;
          return <img alt={alt} src={url} width={"40%"} />
        }
      }
  }
    return (
      <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <>
            <Head title={props.data.contentfulBlogPost.title} info={"Rohit Dalal"} />
            <div className={classes.Wrapper}>

                <BlogHeader location="all blogs" path="/blogs" theme={theme} click={toggleTheme} />

                {/* Contentful post render */}
                <article className={classes.Content}>
                  
                  <div className={classes.Info}>
                    <h1>{props.data.contentfulBlogPost.title}</h1>
                    <time> {props.data.contentfulBlogPost.publishedDate}   </time>

                    <div className={classes.Tags}>
                      <Link to={`/tags/`} ><span>javascript</span></Link>

                      <Link to={`/tags/`} ><span>react</span></Link>

                      <Link to={`/tags/`} ><span>mongodb</span></Link>
                    </div>

                  </div>

                  {
                    documentToReactComponents(props.data.contentfulBlogPost.body.json,options)
                  }
                
                </article>

                <BlogFooter />
                
            </div>
          </>
      </ThemeProvider>
    )
}
