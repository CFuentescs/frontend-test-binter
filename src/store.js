import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import modules from './modules'

const initialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers(modules.reducers),
    initialState,
    composeEnhancers(applyMiddleware()),
)

export default store