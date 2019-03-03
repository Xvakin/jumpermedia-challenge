import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

export default function confgureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk)
    );
}