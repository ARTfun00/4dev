import { createAction , handleActions } from 'redux-actions'
import { resolve, request, reject } from 'redux-promised'

// ------------------------------------
// Constants
// ------------------------------------
export const NAMESPACE = 'students'

export const GET_STUDENTS = NAMESPACE+'/'+'GET_STUDENTS'
export const REVERSE_STUDENTS = NAMESPACE+'/'+'REVERSE_STUDENTS'
export const ADD_CURENCY = NAMESPACE+'/'+'ADD_CURENCY'
export const GET_ONE_CURENCY = NAMESPACE+'/'+'GET_ONE_CURENCY'

const url  = 'http://km.softbistro.online:20080/coins'

// Get info about simple one: http://km.softbistro.online:20080/coins/get/BTC
// Adding new curency: http://km.softbistro.online:20080/coins/add/?symbol=XVG&name=Verge&status=1&description=Verge

// ------------------------------------
// Actions
// ------------------------------------
const getOneCurrency = (symbol) => {
    let newURL = url + '/get/' + symbol + '/?expand=1';

    return{
        type: GET_ONE_CURENCY,
        meta: { promise: true },
        payload: fetch(newURL, {
            method: 'GET',
            mode:'cors'
        }).then(response=>response.json())
    }
}
const getCurrencies = () => {
    return{
        type: GET_STUDENTS,
        meta: { promise: true },
        payload: fetch(url + '/?expand=1', {
            method: 'GET',
            mode:'cors'
        }).then(response=>response.json())
    }
}
const addCurency = (data) => {  //run it with - this.props.addCurency(shortName, name, desc)
    return {
        type: ADD_CURENCY,
        meta: { promise: true },
        payload: postData(url + '/add/', data) // func postData(url, data)
            .then(data => JSON.stringify(data)) // JSON-string from `response.json()` call
            .catch(error => console.error(error))
    }
}
function postData(url, data) { //This function only for JSON data sending !!!
    return  fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: 'symbol=' + data[0] + '&name=' + data[1] +'&status=1&description=' + data[2], // body data type must match "Content-Type" header
    })
    .then(response => console.log(response.json())); // parses response to JSON
};


export const reverseStudents  = createAction(REVERSE_STUDENTS)


export const actions = {
    getCurrencies,
    getOneCurrency,
    reverseStudents,
    addCurency
    
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
    [resolve(GET_STUDENTS)]: (state, { payload }) => {// если запрос решён !
        console.log("resolve GET_STUDENTS")
        return{...state, data:payload, dataFetching:false}
    },
    [reject(GET_STUDENTS)]: (state, { payload }) => {// если запрос отклонено !
        console.log("reject GET_STUDENTS")
        return{...state, data:null, dataFetching:false}
    },
    [request(GET_STUDENTS)]: (state, { payload }) => {// если запрос is dispatched(отправлен) !
        console.log("request GET_STUDENTS")
        return{...state, data:null, dataFetching:true}
    },
// ADD_CURENCY
    [resolve(ADD_CURENCY)]: (state, { payload }) => {
        console.log("resolve ADD_CURENCY")
        return{...state, data:payload, dataFetching:false} //return{...state, data:payload}
    },
// GET_ONE_CURENCY
    [resolve(GET_ONE_CURENCY)]: (state, { payload }) => {
        console.log("resolve GET_ONE_CURENCY")
        return{...state, dataOne:payload, dataOneFetching:false}
    },
    [reject(GET_ONE_CURENCY)]: (state, { payload }) => {
        console.log("reject GET_ONE_CURENCY")
        return{...state, dataOne:null, dataOneFetching:false}
    },
    [request(GET_ONE_CURENCY)]: (state, { payload }) => {
        console.log("request GET_ONE_CURENCY")
        return{...state, dataOne:null, dataOneFetching:true}
    },

    [REVERSE_STUDENTS]:state => {console.log("REVERSE_STUDENTS Reducer has worked! " + state.reversed); return {...state, reversed:!state.reversed}}
},{reversed:false})

// ------------------------------------
// Helpers
// ------------------------------------



