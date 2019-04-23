import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";

console.log("index");

import { defaultState } from './defaultState';

const Home = () => (
    <div>
        <h2>Welcome Home</h2>
    </div>
);

const Article = ({match}) => {
    const { articleId } = match.params;
    const { title, content, authorId } = defaultState.articles.find(article => article.articleId = articleId);
    const { name, userId } = defaultState.users.find(user => user.userId === authorId);
    return (
        <div>
            <h3>
                {title}
            </h3>
            <h4>
                By {name}
            </h4>
            <p>
                {content}
            </p>
        </div>
    );
};

console.log("Exact", defaultState);

const Main = () => (
    <BrowserRouter>
        <h1>
            Scribe's Tavern
        </h1>
        <h2>
            The Internetly Destination For Learned Masters of the Pen
        </h2>
        <Route exact path="/" component={Home}/>
        <Route exact path="/test" render={()=><div>Hello</div>}/>
        <Route path="/article/:articleId" component={Article}/>
    </BrowserRouter>
);

ReactDOM.render(<Main />, document.querySelector("#Container"));
