import reducer from "../redux/reducers/userReducer";
import { createStore } from 'redux';

const Store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;


