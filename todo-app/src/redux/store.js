import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './reducers/counterReducer'

export default function configureStore(preloadedState) {
  const middlewares = []
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(counterReducer, preloadedState, composedEnhancers)

  return store
}