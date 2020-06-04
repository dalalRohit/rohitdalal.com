const { createRemoteFileNode } = require("gatsby-source-filesystem")
const path=require('path');
const {getAllTags}=require('./src/static/data')
if (process.env.NODE_ENV === 'development') {
    process.env.GATSBY_WEBPACK_PUBLICPATH = '/'
}

//https://www.gatsbyjs.org/docs/preprocessing-external-images/
module.exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    createTypes(`
      type Mdx implements Node {
        frontmatter: frontmatter
        featuredImg: File @link(from: "featuredImg___NODE")
      }
      type frontmatter {
        title: String!
        featuredImgUrl: String
        featuredImgAlt: String
      }
    `)
  
}



module.exports.onCreateNode = async ({ node, actions,store,cache,createNodeId }) => {
    const {  createNodeField } = actions

    if(node.internal.type==='Mdx'){
        const slug=path.basename(node. fileAbsolutePath,'.md');
        createNodeField({
            node,
            name:'slug',
            value:slug
        })
    }

    // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
    if(node.internal.type==='Mdx' && node.frontmatter.featuredImgUrl !== null){
        let filenode=await createRemoteFileNode({
            url:node.frontmatter.featuredImgUrl,
            parentNodeId:node.id,
            createNode:actions.createNode,
            createNodeId,
            cache,
            store
        });
        
        if(filenode){
            node.featuredImg___NODE = filenode.id

        }
    }



  }

  module.exports.createPages= async ({graphql,actions}) => {

    const {createPage}=actions;

    const blogTemp=path.resolve('./src/templates/blog-template.js');
    const tagTemp=path.resolve('./src/templates/tag-template.js');

    const response=await graphql(`
        query{
            allMdx{
                edges{
                    node{
                        frontmatter{
                            slug,
                            tags,
                            title
                        }
                    }
                }
            }
        }
    `);

    //Create /tags/${tag} pages
    const allTags=getAllTags(response.data);
    Object.keys(allTags)
        .map( (tag) => {
            createPage({
                component:tagTemp,
                path:`/tags/${tag}`,
                context:{
                    tag
                }
            })
        })

    
    const posts=response.data.allMdx.edges;

    //Create /blogs/${slug} pages
    posts.forEach( (edge,index) => {

        const previous =index === posts.length - 1 ? null : posts[index + 1];
        const next = index === 0 ? null : posts[index - 1];

        createPage({
            component:blogTemp,
            path:`/blogs/${edge.node.frontmatter.slug}`,
            context:{
                slug:edge.node.frontmatter.slug,
                prevPost:previous,
                nextPost:next
            }
        })
    })


}