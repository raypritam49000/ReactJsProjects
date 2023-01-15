import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../_reducers/user.reducers';

const mainReducer = combineReducers({
    user: reducer
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(mainReducer,composeEnhancers(applyMiddleware(thunk)));

export default store;