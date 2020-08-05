import {combineReducers} from "redux";
import questionReducer from "./questionReducer";
import themeReducer from "./themeReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    questions: questionReducer,
    theme: themeReducer,
    user: userReducer,
});

export default rootReducer;