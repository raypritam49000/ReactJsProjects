import { createStore } from 'redux';
import studentReducer from '../reducers/student.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(studentReducer,composeWithDevTools());

export default store;