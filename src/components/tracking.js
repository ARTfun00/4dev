import React from 'react';
import {NavLink} from "react-router-dom";
import { Col, Button, FormGroup, Label, Input} from 'reactstrap';

import {connect} from 'react-redux'
import { actions } from './../redux/modules/students'

class AddTracking extends React.Component {
  constructor() {
    super();
    this.state={
      symb: '',
      name: '',
      desc: ''
    }
  }
  handleChange = (event) =>
  {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <NavLink to={`/`} className="toMainPage">Back to main page</NavLink>
        <div model="curency" className="addTrack">
            <h4 className="text-center">New tracking adding</h4>     
                <FormGroup row>
                    <Label for="exampleSymbol" sm={2}>Symbol</Label>
                    <Col sm={9}>
                        <Input type="text" value={this.state.symbol} name="symb" onChange={this.handleChange} id="curencySymbol" placeholder="symbol of curency"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleName" sm={2}>Name</Label>
                    <Col sm={9}>
                        <Input type="text" value={this.state.name} name="name" onChange={this.handleChange} id="curencyName" placeholder="name of curency"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="exampleText" sm={2}>Description</Label>
                    <Col sm={9}>
                        <Input type="textarea" value={this.state.description} name="desc" onChange={this.handleChange} id="curencyDescription" placeholder="This currency..."/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                    <Button onClick={this.handleClick}>Add to tracking list</Button>
                    <h1>{this.state.data}</h1>
                    </Col>
                </FormGroup>

        </div>
      </React.Fragment>
    );
  }

  handleClick = (event) => {
    console.log("handle click!")
     //console.log("this.state.symb= " + this.state.symb)
     //console.log("this.state.name= " + this.state.name)
     //console.log("this.state.desc= " + this.state.desc)
    let val = [this.state.symb, this.state.name, this.state.desc]
    this.props.addCurency(val)
  }
}

const mapDispatchToProps = {
  ...actions
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(AddTracking)