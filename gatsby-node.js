/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const {getAllTags}=require('./src/static/data')

const path=require('path');
// You can delete this file if you're not using it
module.exports.onCreateNode = ({ node, actions }) => {
    const {  createNodeField } = actions
    // Transform the new node here and create a new node or
    // create a new node field.
    if(node.internal.type==='MarkdownRemark'){
        const slug=path.basename(node. fileAbsolutePath,'.md');
        createNodeField({
            node,
            name:'slug',
            value:slug
        })
    }
  }

  module.exports.createPages= async ({graphql,actions}) => {

    const {createPage}=actions;

    const blogTemp=path.resolve('./src/templates/blog-template.js');
    const tagTemp=path.resolve('./src/templates/tag-template.js');

    const response=await graphql(`
        query{
            allContentfulBlogs{
                edges{
                    node{
                        slug,
                        tags
                    }
                }
            }
        }
    `);

    let allTags=getAllTags(response.data);
    Object.keys(allTags)
        .forEach( (tag) => {
            createPage({
                component:tagTemp,
                path:`/tags/${tag}`,
                context:{
                    tag:tag
                }
            })
        })
        
    response.data.allContentfulBlogs.edges.forEach( (edge) => {
        createPage({
            component:blogTemp,
            path:`/blogs/${edge.node.slug}`,
            context:{
                slug:edge.node.slug
            }
        })

    })
  }