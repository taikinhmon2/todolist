
import app from "./component/component.js";
import { atach } from "./store.js";
import html from "./core.js";
const tagRoot = document.querySelector('.root')
atach(app,tagRoot)
