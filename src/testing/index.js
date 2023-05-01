import Enzyme, { mount, render, shallow, configure  } from 'enzyme'

import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import modules from '../modules'
export { shallow, render, mount }
const initialState = {}

Enzyme.configure({ adapter: new Adapter() })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const mockStore = configureMockStore([])

export const mockedStore = mockStore(initialState)

export const initializeStoreWithState = (state) => {
    return createStore(
        combineReducers(modules.reducers),
        state,
        composeEnhancers(applyMiddleware()),
    )
}

export const initializeRealStore = () => {
    return initializeStoreWithState(initialState)
}