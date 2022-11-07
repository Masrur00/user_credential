import { legacy_createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/reducer";



export const Store = legacy_createStore(AuthReducer, applyMiddleware(thunk));
