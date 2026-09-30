import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { rootReducer } from './reducers'

export const store = createStore(rootReducer, applyMiddleware(createLogger()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch