import {authAPI} from "../../API/api";

const initialState = {
    isLoggedIn: false,
    pasteLogin: ""
}

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
export const getLoginAC = (data) => ({type:"GET_LOGIN", data})
export const redirectAC = (data) => ({type:"REDIRECT", data})

// thunks
export const loginTC = () => (dispatch) => {
    //dispatch(redirectAC(true)) -можно так

    //Заготовка под расширение
    authAPI.login()
        .then(dispatch(redirectAC(true)))
        .catch((error) => {alert(error)})
}

