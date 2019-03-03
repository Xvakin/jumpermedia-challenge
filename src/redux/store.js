import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer'
import createMiddleware from './middleware/clientMiddleware'

export default function configureStore(client) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        createMiddleware(client),
        thunk,
      ),
    ),
  )
}
