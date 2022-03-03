import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './reducers/counterReducer'
import thunkMiddleware from 'redux-thunk'
import todoReducer from './reducers/todoReducer'


const rootReducer=combineReducers({
  counter:counterReducer,
  todo: todoReducer
})
export default function configureStore(preloadedState) {
  const middlewares = []
  const middlewareEnhancer = applyMiddleware(...middlewares,thunkMiddleware)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}