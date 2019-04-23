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
    const { title, content, author } = defaultState.articles.find(article => article.articleId = articleId);
    return (
        <div>
            <h3>
                {title}
            </h3>
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
            Wizard's Hub
        </h1>
        <Route exact path="/" component={Home}/>
        <Route exact path="/test" render={()=><div>Hello</div>}/>
        <Route path="/article/:articleId" component={Article}/>
    </BrowserRouter>
);

ReactDOM.render(<Main />, document.querySelector("#Container"));
