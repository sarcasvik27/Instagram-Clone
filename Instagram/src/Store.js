import {createStore} from "redux"
import rootReducer from "./Redux/reducers/rootreducer"

const store=createStore(rootReducer)
export default store