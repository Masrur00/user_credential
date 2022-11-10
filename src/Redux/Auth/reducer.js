import * as types from "./actionTypes"

const init = {
    isAuth: false,
    user: {},
    token: "",
    error: "",
    link: ""
}

export const AuthReducer = (state = init, { type, payload }) => {
    switch (type) {

        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: payload.user,
                token: payload.token
            };
        case "reset":
            return {
                ...state,
                isAuth: false,
                user: "",
                token: ""
            };
        case "reset_link":
            return {
                ...state,
                link: payload
            };

        case types.SIGNUP_FAILURE:
            return {
                ...state,
                error: payload
            };
        
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: payload.user,
                token: payload.token
            };
        case types.LOGIN_FAILURE:
            return {
                ...state,
                error: payload
            };

        default:
            return state;
    }
}