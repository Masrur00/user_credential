import * as types from "./actionTypes"
import axios from "axios"

export const signupSucess = (payload) => (dispatch) => {
    return axios
        .post("https://user2auth.herokuapp.com/register", payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.SIGNUP_SUCCESS, payload: r.data })
            return types.SIGNUP_SUCCESS
        })
        .catch((er) => {
            dispatch({ type: "SIGNUP_FAILURE"});
        });

}

export const loginsuccess = (payload) => (dispatch) => {
    
    axios.post("https://user2auth.herokuapp.com/login", payload)
        .then((r) => {
            console.log(r);
            dispatch({ type: types.LOGIN_SUCCESS, payload: r.data })
            return types.LOGIN_SUCCESS
        })
        .catch((er) => {
            dispatch({
                type: "LOGIN_FAILURE"
            })
        })
}