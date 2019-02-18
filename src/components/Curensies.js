import React, { Component } from 'react'
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux'
import { actions } from './../redux/modules/students'
import { map } from 'lodash'
import { Button, Container, Row, Col } from 'reactstrap'
import { studentsSelector, isFetchingSelector } from './../redux/selectors/studentsSelector'

import '../App.css';

class Curensies extends Component {
    componentDidMount(){
        this.props.getCurrencies()
    }
    renderCurencies(){
        const {pupils={}} = this.props
        return map(pupils.data || [], (curensy,key)=>
        <div key={key} className="fill width">
            <NavLink to={`/currency/${curensy.symbol}`}>
                <Row key={curensy.id} className="list-group-item-action rowsCustom">
                    <Col xs="1">{curensy.symbol}</Col>
                    <Col xs="2">{curensy.name}</Col>
                    <Col xs="2">${curensy.price}</Col>
                    <Col>${curensy.coin_info.volume_24h}</Col>
                    <Col>{curensy.coin_info.percent_change_1h}%</Col>
                    <Col><div><span>&#10006;</span></div></Col>
                </Row>
            </NavLink>
            <hr className="hrCustom"></hr>
        </div>
        )
    }
    render() {
        const {pupils, isFetching} = this.props
        if (isFetching || !pupils){
            return <div>Loading...</div>
        }
        const curencies = this.renderCurencies()
        return (
            <div>
                <Container className="list-group list-group-flush textClass1">
                    <div>
                        <Row key="0" className="list-item rowsCustom rowHeader">
                            <Col xs="1" className="textClass1">Symbol</Col>
                            <Col xs="2" className="textClass1">Name</Col>
                            <Col xs="2" className="textClass1">Price</Col>
                            <Col className="textClass1">Volume (24h)</Col>
                            <Col className="textClass1">Change (1h)</Col>
                            <Col className="textClass1"></Col>
                        </Row>
                        <hr className="hrCustom"></hr>
                    </div>

                    {curencies}
                </Container>
                <div className="container textClass2">
                    <Button color="info" onClick={this.handleRefreshClick.bind(this)} className="buttonD">Refresh data</Button>
                    <Button color="secondary" onClick={this.handleClick.bind(this)} className="customButton">Reverse list</Button>
                    <Button color="danger" className="float-right">Delete list</Button>
                </div>
                
            </div>
        )
            
    }

    handleClick() {
        this.props.reverseStudents()
    }
    handleRefreshClick() {
        this.props.getCurrencies()
    }
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    pupils:studentsSelector(state),
    isFetching:isFetchingSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Curensies)