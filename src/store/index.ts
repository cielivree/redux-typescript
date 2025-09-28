import { applyMiddleware, createStore } from 'redux'
import { thunk } from 'redux-thunk'
import { rootReducer } from './reducers/index'

export const store = createStore(rootReducer, undefined, applyMiddleware(thunk))