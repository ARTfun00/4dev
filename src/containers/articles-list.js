import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index.js'
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";

class ArticlesList extends React.Component {

    showList () {
        return this.props.articles.map ((item) => {
            return (
                <li onClick={() => this.props.select (item)} 
                className="article-post" key={item.rank}>
                    <div>
                    <p>Short name: {item.shortName}</p>
                    <p>Original name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <NavLink to={`/news/article/${item.rank}`}>Check details...</NavLink>
                    </div>
                </li>
            );
        });
    }

    render () {
        return (
            <ol>
                {this.showList ()}
            </ol>
        );
    }
}

function mapStateToProps (state) {
    return {
        articles: state.articles
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ArticlesList);