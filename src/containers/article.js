import React, {Component} from 'react';
import {connect} from 'react-redux';

class ArticleDetails extends React.Component {
    render () {
        if(!this.props.article) {
            return (<p>Choose the car</p>);
        }
        return (   
            <div>
                <h2>{this.props.article.shortName} (ranking - {this.props.article.rank})</h2>
                <p>Name:        {this.props.article.name}</p>
                <p>Market cap:  {this.props.article.marketCap}</p>
                <p>Price:       {this.props.article.price}</p>
                <p>Volume:      {this.props.article.volume}</p>
                <p>Supply:      {this.props.article.supply}</p>
                <p>Change:      {this.props.article.change}</p>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        article: state.active
    }
}

export default connect (mapStateToProps)(ArticleDetails);