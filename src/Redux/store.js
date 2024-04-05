import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import userReducer from "./user/user_reducer";
import thunk from "redux-thunk";
import { noteReducer } from "./notes/note_reducer";

let rootReducer = combineReducers({
    userReducer:userReducer,
    noteReducer:noteReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))