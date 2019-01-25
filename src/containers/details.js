import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends React.Component {
    render () {
        if(!this.props.carrr) {
            return (<p>Choose the car</p>);
        }
        return (
            <div>
                <h2>{this.props.carrr.car}</h2>
                <img src={this.props.carrr.img}></img>
                <p>Description: {this.props.carrr.desc}</p>
                <p>Speed: {this.props.carrr.speed}, weight: {this.props.carrr.weight}</p>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        carrr: state.active
    }
}

export default connect (mapStateToProps)(Details);