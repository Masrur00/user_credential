import * as types from "./actionTypes"

const init = {
    isAuth: false,
    user: {},
    token:""
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

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                user: payload.user,
                token: payload.token
            };

        default:
            return state;
    }
}