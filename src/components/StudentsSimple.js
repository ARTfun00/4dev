import React, { Component } from 'react';
import {connect} from 'react-redux'
import {NavLink} from "react-router-dom";
import _ from 'lodash'

import { studentsSelector } from '../redux/selectors/studentsSelector'

class Students extends Component {
    render() {
        const {pupils} = this.props
        return pupils ?
            <div>
                <NavLink to={`/`} className="toMainPage">Back to main page</NavLink>
                {
                    _.map(pupils.data, pupil=><div key={pupil.id}>{pupil.name} - {pupil.symbol}</div>)
                }
            </div>
             :
            <div>Loading...</div>
    }
}
/*
const mapStateToProps = (state) => ({
    pupils:studentsSelector(state),
})
*/
export default connect/*(mapStateToProps)*/(Students)