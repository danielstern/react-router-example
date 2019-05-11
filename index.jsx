import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";

import { defaultState } from './config/defaultState';
import { AuthorNameLink } from './components/common/AuthorNameLink';

const Home = () => {
    const { authors } = defaultState;
    return (
        <div>
            <h2>
                The Internetly Destination For Learned Masters of the Pen
            </h2>
            <h3>
                Our Master Wordsmiths
            </h3>
            <ul>
                { authors.map((author) => (
                    <li key={author.userId}>
                        <AuthorNameLink {...author}/>
                    </li>
                ))}
            </ul>
        </div>

    )
};



const AuthorDetail = ({match}) => {
    const { userId } = match.params;
    const { authors, articles } = defaultState;
    const author = authors.find((author) => author.userId === userId);
    console.log(userId, author);
    const filteredArticles = articles.filter((article) => article.authorId === userId);
    return (
        <div>
            <h3>Articles by {author.name}</h3>
            <ul>
                { filteredArticles.map((article) => (
                    <a key={article.articleId} href={`/article/${article.articleId}`}><li>{article.title}</li></a>
                ))}
            </ul>
        </div>
    )
};

const handleArticleLike = (articleId)=>{
    let article = defaultState.articles.find(article => article.articleId === articleId)
    article.score += 1;
    render();
};

const Article = ({match}) => {
    const { articleId } = match.params;
    const { title, content, authorId, score } = defaultState.articles.find(article => article.articleId === articleId);
    const author = defaultState.authors.find(user => user.userId === authorId);
    return (
        <div>
            <h3>
                {title}
            </h3>
            <h4>
                By <AuthorNameLink {... author}/>
            </h4>
            <p>
                {content}
            </p>
            <p>
                Score: {score}
            </p>
            <button onClick={()=>handleArticleLike(articleId)}>
                Like!
            </button>
        </div>
    );
};

const Main = () => (
    <BrowserRouter>
        <a href="/">
            <h1>
                Scribe's Tavern
            </h1>
        </a>
        <Route exact path="/" component={Home}/>
        <Route path="/article/:articleId" component={Article}/>
        <Route path="/author/:userId" component={AuthorDetail}/>
    </BrowserRouter>
);

const render = ()=>{
    ReactDOM.render(<Main />, document.querySelector("#Container"));
};

render();

