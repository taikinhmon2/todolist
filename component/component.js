import { connect } from "../store.js";
import html from "../core.js";
import Header from "./Heder.js";
import Todolist from "./todolist.js";
import footer from "./footer.js";
const app = ({todos}) => {
    return html`
    <section class="todoapp">
    ${Header()}
    ${todos.length > 0 && Todolist()}
    ${todos.length > 0 && footer()}
    </section>
    `
}
export default connect()(app)