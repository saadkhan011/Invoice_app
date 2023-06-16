import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import reducers from "./state/reducer";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(compose(thunk)));

export default store;