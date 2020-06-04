const getAllTags=(data) => 
{
    const allTags={};
    data.allMdx.edges.filter( (edge) => {
        let tags=edge.node.frontmatter.tags;

        tags.forEach( (tag) => {
            if(tag in allTags){
                allTags[tag]+=1;
            }
            else{
                allTags[tag]=1;
            }
        })
    })
    return allTags;
}

const config={
    about:`Hello people, I'm Rohit Dalal. Nice to see you here .<br/>
    I'm a full stack software devloper, a curious tech enthusiast.`
}
module.exports={
    getAllTags,
    config
}
