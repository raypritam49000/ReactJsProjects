import Reducer from "./reducers";
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    reducer: Reducer,
});

export default RootReducer;