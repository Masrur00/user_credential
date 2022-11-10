import { legacy_createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { AuthReducer } from "./Auth/reducer";


const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
export const Store = legacy_createStore(AuthReducer, composeEnhancers(applyMiddleware(thunk)));
