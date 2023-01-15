import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import studentReducer from '../reducer/student.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(studentReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;