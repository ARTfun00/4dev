import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {
    Alert,
    Badge,
    UncontrolledTooltip,
    Nav,
    NavItem
} from 'reactstrap';

class Header extends Component {
  render() {
    return (
        <div id="header">
            <Alert color="dark">
                <h1 className="page-header">
                    Be <Badge color="info">always in trend</Badge><br/>
                    of any <Badge color="primary">cryptocurrency rate</Badge>
                </h1>
                <Nav className="customCSS">
                    <NavItem id="UncontrolledTooltip1">
                        <NavLink to={`/currency/addTracking`} className="navlink">Add currency</NavLink>
                        {/*href="/currency/addTracking"*/}
                        <UncontrolledTooltip placement="left" target="UncontrolledTooltip1">
                            Add new currency to your custom list!
                        </UncontrolledTooltip>
                    </NavItem>
                    <NavItem id="UncontrolledTooltip2">
                        <NavLink to={`/currency/setReminder`} className="navlink">Reminders</NavLink>
                        <UncontrolledTooltip placement="bottom" target="UncontrolledTooltip2">
                            Set personal reminder when the currency that you need will reach some price!
                        </UncontrolledTooltip>
                    </NavItem>
                    <NavItem id="UncontrolledTooltip3">
                        <NavLink to={`/autentification`} className="navlink">Register/Login</NavLink>
                        <UncontrolledTooltip placement="right" target="UncontrolledTooltip3">
                            Register or login there to save personal interestings in system!
                        </UncontrolledTooltip>
                    </NavItem>
                </Nav>
            </Alert>
        </div>
    );
  }
}

export default Header;
