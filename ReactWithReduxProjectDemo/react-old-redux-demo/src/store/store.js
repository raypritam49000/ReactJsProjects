import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import reducers from '../reducers/reducers'
import thunk from 'redux-thunk';

//export const store = createStore(reducers);

//export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//export const store = createStore(reducers, applyMiddleware(thunk));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// const combine = combineReducers({
//     name: changeName,
//     course: addCourse
// })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(combine, { name: "Ajit", course: ["Angular", "React"] }, composeEnhancers(applyMiddleware(thunk)));
