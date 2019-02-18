import _ from 'lodash'

export const studentsSelector = state => {
    return state.students.reversed ?  _.reverse(_.clone(state.students.data)) : _.clone(state.students.data)
}

//export const studentsReversedSelector = state => _.reverse(state.students.data) || []
export const isFetchingSelector = state => state.students.dataFetching

export const sliderCurenciesSelector = state => {
    return _.clone(state.students.data)
}

export const curencyOneSelector = state => {
    return _.clone(state.students.dataOne)
}

export const isFetchingOneSelector = state => state.students.dataOneFetching