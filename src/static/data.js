
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
    about:`Helllo, Nice to see you here <br/>
    I'm a full stack web devloper <br/ >
    <i class="rohit">I'm avaliable for freelance projects and work</i> <br/>
    I like to keep things simple and turn them into working things <br/>
    Contact me for any collaboration or just to say Hii ;)
    `
}
module.exports={
    getAllTags,
    config,
}
