import {authAPI} from "../../API/api";

const initialState = {
    isLoggedIn: false,
    pasteLogin: ""
}
const getLogin = {type: "GET_LOGIN"}
const redirect = {type: "REDIRECT"}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REDIRECT":
            return {
                ...state,
                isLoggedIn: action.data
            }
        case "GET_LOGIN":
            return {
                ...state,
                pasteLogin: action.data
            }
        default:
            return state
    }
}

// actions
export const getLoginAC = (data) => ({...getLogin, data})
export const redirectAC = (data) => ({...redirect, data})

// thunks
export const loginTC = (values) => (dispatch) => {
    // dispatch(redirectAC(true)) -можно так, специально подготовил для расширения приложения
    authAPI.login()
        .then((data) => {
            debugger
            dispatch(getLoginAC(values.login))
            dispatch(redirectAC(data))
        })
        .catch((error) => {
            alert(error)
        })
}

export const logoutTC = () => (dispatch) => {
    authAPI.logout()
        .then((data) => {
            dispatch(getLoginAC(""))
            dispatch(redirectAC(data))
        })
        .catch((error) => {
            alert(error)
        })
}