import {createStore} from "redux";
import {rootReducer} from "../Reducer/rootReducer";

let store = createStore(rootReducer);

export default store;
