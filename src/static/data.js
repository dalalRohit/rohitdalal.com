
const getAllTags=(data) => 
{
    const allTags={};
    data.edges.filter( (edge) => {
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
    <b class="rohit">Avaliable for freelance projects and work</b> <br/>
    I like to keep things simple and turn them into working projects <br/>
    Contact me for any collaboration or just to say Hii ;)
    `
}
module.exports={
    getAllTags,
    config,
}
