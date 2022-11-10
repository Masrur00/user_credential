import * as types from "./actionTypes"
import axios from "axios"

const base_url2 = "http://localhost:8085";
const base_url = `https://user2auth.herokuapp.com`;



export const signupSucess = (payload) => (dispatch) => {
    return axios.post(`${base_url}/register`, payload)
        .catch(function (error) {
            if (error.response) {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.response.data })
            } else {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.message })
            }
        }).then((r) => dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data }))

}



export const loginsuccess = (payload) => (dispatch) => {

    return axios.post(`${base_url}/login`, payload)
        .then((r) => {
            dispatch({ type: types.LOGIN_SUCCESS, payload: r.data })
        })
        .catch(function (error) {
            if (error.response) {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.response.data })
            } else {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.message })
            }
        })
}
export const forgot = (payload) => (dispatch) => {

    return axios.post(`${base_url}/forgot`, payload)
        .then((r) => {
            dispatch({ type: "reset_link", payload: r.data.link })
            console.log("form forgot action checking link", r.data.link)
        })
        .catch(function (error) {
            if (error.response) {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.response.data })
            } else {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.message })
            }
        })
}
export const passwordReset = (link, payload) => (dispatch) => {
    
    let id = link.split('/')[0];
    let token = link.split('/')[1];
    return axios.post(`${base_url}/reset/${id}/${token}`, payload)
        .then((r) => {
            console.log("action passwordReset",r)
            // dispatch({ type: "reste_link", payload: r.data.link })
        })
        .catch(function (error) {
            if (error.response) {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.response.data })
            } else {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.message })
            }
        })
}


export const update = (payload, id, token) => (dispatch) => {

    return axios.patch(`${base_url}/update/${id}/${token}`, payload)
        .then((r) => {
            dispatch({ type: "reset" })
            return r.data.message
        })
        .catch(function (error) {
            if (error.response) {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.response.data })
            } else {
                dispatch({ type: types.SIGNUP_FAILURE, payload: error.message })
            }
        })
}