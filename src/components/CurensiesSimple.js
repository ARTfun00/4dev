import React, {Component} from 'react';
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";
import {actions} from './../redux/modules/students'
import { studentsSelector, curencyOneSelector, isFetchingSelector, isFetchingOneSelector } from '../redux/selectors/studentsSelector'
import { Container, Row, Col, Button} from 'reactstrap'

class Students extends Component {
    findSelected(){
        const {pupils} = this.props
        const symbol = this.props.match.params.id     
        
        for (let i = 0, max = pupils.data.length; i < max; i++) {
            if (pupils.data[i].symbol == symbol) {
                return pupils.data[i];
            }
        }
    }

    render() {
        const {pupils, isFetching, curencyOne, isFetchingOne} = this.props;

        if(curencyOne && pupils) //если появился, то refresh-им наш обьект с криптовалютой в масиве из storage 
        {
            for (let i = 0, max = pupils.data.length; i < max; i++) {
                if (pupils.data[i].symbol == curencyOne.data[0].symbol) { //maybe another verification of string values
                    pupils.data[i] = curencyOne.data[0];
                }
            }
        }

        if(!pupils || isFetching){
            this.props.getCurrencies();
        
            return <div>Loading...</div>
        } else {
            if(isFetchingOne){
                return <div>Loading...</div>
            }
        }

        const renderOne = this.findSelected()

        return (
            <div>
                <NavLink to={`/`} className="toMainPage">Back to main page</NavLink>
                <div>
                    <h1 className="text-center">{renderOne.name} <span className="">({this.props.match.params.id})</span></h1>
                    <Container className="customContainer">
                        <Row>
                            <Col>
                                <Row className="text-center">
                                    <Col xs="3">
                                        <div><h6>Volume 24h</h6></div>
                                        <p className="spanParagraph">${renderOne.coin_info.volume_24h.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</p>
                                        <p className="spanParagraph">ratio with another curency</p>
                                        <p className="spanParagraph">ratio with another curency</p>
                                    </Col>
                                    <Col xs="3">
                                        <div><h6>Market cap</h6></div>
                                        <p className="spanParagraph">${renderOne.coin_info.market_cap.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</p>
                                        <p className="spanParagraph">ratio with another curency</p>
                                        <p className="spanParagraph">ratio with another curency</p>
                                    </Col>
                                    <Col xs="3">
                                        <h6>Percent change (1h)</h6>
                                        <p className="spanParagraph">{renderOne.coin_info.percent_change_1h} %</p>
                                        <p className="spanParagraph">ratio with another curency %</p>
                                        <p className="spanParagraph">ratio with another curency %</p>
                                    </Col>
                                    <Col xs="3">
                                        <h6>Percent change (24h)</h6>
                                        <p className="spanParagraph">{renderOne.coin_info.percent_change_24h} %</p>
                                        <p className="spanParagraph">ratio with another curency %</p>
                                        <p className="spanParagraph">ratio with another curency %</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs="4">
                                <div>
                                    <h3>Description</h3>
                                    <p>{renderOne.description}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                    <div className="leftMarg">
                        <h6>Price: <strong>${renderOne.price.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')}</strong></h6>
                    </div>

                    <Button color="info" onClick={this.handleClick.bind(this)} className="detailsButtons leftMarg">Refresh</Button>
                    <Button color="danger" onClick={this.handleDeleteClick.bind(this)} className="detailsButtons">Remove</Button>
                </div>
            </div>
        )
    }

    handleClick() {
        const id = this.props.match.params.id;

        this.props.getOneCurrency(id);
    }
    handleDeleteClick() {
        console.log("Remove pressed")
        //console.log(this.props);
    }
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    pupils:studentsSelector(state),
    curencyOne: curencyOneSelector(state),
    isFetching: isFetchingSelector(state),
    isFetchingOne: isFetchingOneSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Students)