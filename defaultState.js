export const defaultState = {
    users:[{
        id: "user-1",
        name:"Jon Snow",
        articles:["article-1","article-2"]
    },{
        id:"user-2",
        name:"Arya Stark",
        articles:["article-3"]
    },{
        id:"user-3",
        name:"Cersei Lannister",
        articles:["article-4"]
    }],
    articles:[{
        id:"article-1",
        author:"user-1",
        title:"So your brother is king",
        content:"No big deal! So what if your brother is the king of the realm?"
    },{
        id:"article-2",
        author:"user-1",
        title:"Looking great in black",
        content:"One way to look your best that people often overlook is accessorising your cloak with raven's and crow's feathers..."
    },{
        id:"article-3",
        author:"user-2",
        title: "What to do when people underestimate you",
        content: "As they say, good things come in small packages..."
    },{
        id:"article-4",
        author:"user-3",
        title:"Governing the Realm 101",
        content:"First, replace any experienced advisors with trusted, personal friends..."
    }]
};