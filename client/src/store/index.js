import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './../reducers/'

const enhancer = composeWithDevTools()

const store = createStore(rootReducer, enhancer);
export default store;