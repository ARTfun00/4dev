import React from 'react';
import ArticlesList from '../containers/articles-list';
import Article from '../containers/article';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

export default class News extends React.Component{
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