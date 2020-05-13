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


const getBlogsByTag=(data,tag) => {

}

module.exports={
    getAllTags,
    getBlogsByTag
}
