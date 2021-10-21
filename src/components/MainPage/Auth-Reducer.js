const initialState = {
    isLoggedIn: false,
    pasteLogin: ""
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login/SET_IS_LOGGED_IN':
            return {...state, isLoggedIn: action.value}
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
export const setIsLoggedInAC = (value) =>
    ({type: 'login/SET_IS_LOGGED_IN', value})

export const getLoginAC = (data) => ({type:"GET_LOGIN", data})
const redirectAC = (data) => ({type:"REDIRECT", data})

// thunks
export const loginTC = () => (dispatch) => {
    dispatch(redirectAC(true))
}

