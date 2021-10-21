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

// thunks
export const loginTC = (data) => (dispatch) => {
    //dispatch(setAppStatusAC('loading'))
    // authAPI.login(data)
    //     .then((res) => {
    //         debugger
    //         if (res.data === passCorrect) {
    //             dispatch(setIsLoggedInAC(true))
    //             //dispatch(setAppStatusAC('succeeded'))
    //         } else {
    //             handleServerAppError(dispatch, res.data)
    //         }
    //     })
    //     .catch((error) => {
    //         handleServerNetworkError(dispatch, error)
    //     })
    dispatch(redirectAC(true))
}
/*export const logoutTC = () => (dispatch) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then((res) => {


            //1!!!!!!!!!!!!!!!!!!
            dispatch(setIsLoggedInAC(false))
            dispatch(setAppStatusAC('succeeded'))


        })
        .catch((error) => {
            handleServerNetworkError(dispatch, error)
        })
}*/

export const getLoginAC = (data) => ({type:"GET_LOGIN", data})
const redirectAC = (data) => ({type:"REDIRECT", data})