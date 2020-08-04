import {combineReducers} from "redux";
import questionReducer from "./questionReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
    questions: questionReducer,
    theme: themeReducer
});

export default rootReducer;