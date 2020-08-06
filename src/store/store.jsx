import rootReducer from "./reducers";
import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";



const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// store.dispatch(setDataFromAPI('http://127.0.0.1:8000/list/'));

export default store;
