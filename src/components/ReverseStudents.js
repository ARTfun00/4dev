import React, { Component } from 'react';
import {connect} from 'react-redux'
import { actions } from './../redux/modules/students'
import _ from 'lodash'
import { studentsReversedSelector, isFetchingSelector } from './../redux/selectors/studentsSelector'

class ReverseStudents extends Component {
    render() {
        const {pupils, isFetching} = this.props
        return pupils && !isFetching ?
            _.map(pupils, pupil=><div key={pupil.name}>{pupil.name}</div>) :
            <div>Loading...</div>
    }
}

const mapDispatchToProps = {
    ...actions
}

const mapStateToProps = (state) => ({
    pupils:studentsReversedSelector(state),
    isFetching:isFetchingSelector(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ReverseStudents)