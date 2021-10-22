import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {authReducer} from "../components/MainPage/Auth-Reducer";

// заготовка под расширение:  combineReducers,
export const rootReducer = combineReducers({
    auth: authReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
