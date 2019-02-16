import React, { Component } from 'react';
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";
import { actions } from './../redux/modules/students'
import { studentsSelector, curencyOneSelector } from '../redux/selectors/studentsSelector'

class Students extends Component {
    findSelected(){
        const {pupils} = this.props
        const symbol = this.props.match.params.id     
        
        for (let i = 0, max = pupils.data.length; i < max; i++) {
            if (pupils.data[i].symbol == symbol) {
                return pupils.data[i];
            }
        }        
        /*
            this.props.getOneCurrency(symbol)
            const curencyOne = this.props
            console.log(curencyOne)
            return curencyOne
        */
    }

    render() {
        const {pupils} = this.props;
        if(!pupils){
            this.props.getCurrencies();
            return <div>Loading...</div>
        }
        const renderOne = this.findSelected()

        return (
            <div>
                <NavLink to={`/`} className="toMainPage">Back to main page</NavLink>

                <h1>{this.props.match.params.id} description:</h1>
                <div>Symbol {renderOne.symbol}</div>
                <div>Name {renderOne.name}</div>
                <div>Description {renderOne.description}</div>
                <div>Volume 24h {renderOne.coin_info.volume_24h}</div>
                <div>Percent change (1 hour) {renderOne.coin_info.percent_change_1h}</div>
                <div>Percent change (24 hours) {renderOne.coin_info.percent_change_24h}</div>
                <div>Percent change (7 days) {renderOne.coin_info.percent_change_7d}</div>
                <div>Market cap {renderOne.coin_info.market_cap}</div>
                <div>Price {renderOne.price}</div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    pupils:studentsSelector(state),
    curencyOne: curencyOneSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Students)