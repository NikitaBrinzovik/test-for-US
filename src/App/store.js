import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {authReducer} from "../components/MainPage/Auth-Reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
export const rootReducer = combineReducers({
    auth: authReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
