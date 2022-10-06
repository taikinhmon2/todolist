import Loger from "./loger.js"
import { creatStore } from "./core.js";
import reducer from "./reducer.js";
const {atach,connect,dispatch} = creatStore(Loger(reducer))
window.dispatch = dispatch
export {atach,connect} 