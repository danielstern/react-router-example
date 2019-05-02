export const defaultState = {
    authors:[{
        userId: "user-1",
        name:"Jon Snow",
        articles:["article-1","article-2"]
    },{
        userId:"user-2",
        name:"Arya Stark",
        articles:["article-3"]
    },{
        userId:"user-3",
        name:"Cersei Lannister",
        articles:["article-4"]
    }],
    articles:[{
        articleId:"article-1",
        authorId:"user-1",
        title:"So your brother is king",
        content:"No big deal! So what if your brother is the king of the realm?"
    },{
        articleId:"article-2",
        authorId:"user-1",
        title:"Looking great in black",
        content:"One way to look your best that people often overlook is accessorising your cloak with raven's and crow's feathers..."
    },{
        articleId:"article-3",
        authorId:"user-2",
        title: "What to do when people underestimate you",
        content: "As they say, good things come in small packages..."
    },{
        articleId:"article-4",
        authorId:"user-3",
        title:"Governing the Realm 101",
        content:"First, replace any experienced advisors with trusted, personal friends..."
    }]
};