
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
    about:`Hello, Nice to see you here <br/>
    I'm a self-taught Full Stack Software Developer <br/ >
    <b class="rohit">Available for freelance projects and work</b> <br/>
    I like to keep things simple.
    Contact me for any collaboration or just to say Hii ;)
    `
}
module.exports={
    getAllTags,
    config,
}
