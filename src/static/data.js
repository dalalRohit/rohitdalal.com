const getAllTags=(data) => 
{
    const allTags={};
    data.allContentfulBlogs.edges.filter( (edge) => {
        let tags=edge.node.tags;

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

module.exports={
    getAllTags
}
