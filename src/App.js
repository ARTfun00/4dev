import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

import {createStore} from 'redux';
import allReducers from './reducers';

import {Provider} from 'react-redux';
import WebPage from './components/WebPage';
import News from './components/News';

const store = createStore (allReducers);
//import myNews from "./data/news.json";
//var myNews = JSON.parse(fs.readFileSync('./data/news.json'));
var myNews = require('./data/CoinMarketData.json');


    class Home extends React.Component{
        render(){
            return (
              <React.Fragment>
                <h2>Главная</h2>
                <ul>
                  <li>
                    <NavLink to={`/about`}>About page</NavLink>
                  </li>
                  <li>
                    <NavLink to={`/news`}>News page</NavLink>
                  </li>
                  <li>
                    <WebPage />
                  </li>
                </ul>
              </React.Fragment>
            );
        }
    }
    class About extends React.Component{
        render(){
            return <h2>О сайте</h2>;
        }
    }
    class NotFound extends React.Component{
        render(){
            return (
              <React.Fragment>
                <h2>Ресурс не найден</h2>
                <br></br>
                <p><NavLink to={`/`}>To main page..</NavLink></p>
              </React.Fragment>
          );
        }
    }/*
     class ArticlesList extends React.Component{
        render(){
          return (
            <div>
              <h2>List of currencies</h2>
              {
                 myNews.map(function(item){
                  return (
                    <div className="article-post" key={item.rank}>
                      <p>Short name: {item.shortName}</p>
                      <p>Original name: {item.name}</p>
                      <p>Price: {item.price}</p>
                      <NavLink to={`/news/article/${item.rank}`}>Check details...</NavLink>
                    </div>
                  )
                })
              }
            </div>
          );
        }
    }
    class Article extends React.Component{
        render(){
            const prodId = this.props.match.params.id;
            let article;
            for(var i=0; i < myNews.length; i++){
                if(myNews[i].rank == prodId){
                  article = myNews[i];
                    break;
                }
            }
            if(article === undefined)
                return <h2>Article isn't exist!</h2>;
            else
                return (
                  <React.Fragment>
                    <p>Short name: {article.shortName}</p>
                    <p>Original name: {article.name}</p>
                    <p>Market cap: {article.marketCap}</p>
                    <p>Price: {article.price}</p>
                    <p>Volume: {article.volume}</p>
                    <p>Supply: {article.supply}</p>
                    <p>Change: {article.change}</p>
                  </React.Fragment>
                );
        }
    }
    class News extends React.Component{
        render(){
            return (
              <div>
                <Switch>
                  <Route exact path="/news" component={ArticlesList} />
                  <Route path="/news/article/:id" component={Article} />
                </Switch>
              </div>
          );
        }
    }
*/
    class App extends Component {
    
      render() {
        return (
          <div className="App">
              <Router>
                <Provider store={store}>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/news" component={News} />
                    <Route component={NotFound} />
                  </Switch>
                </Provider>
              </Router>
          </div>
        );
      }
    }

export default App;
