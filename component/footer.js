import html from "../core.js"
import { connect } from "../store.js"

function footer({todos,filters,filter}) {
    return html`
    <footer class="footer">
				<span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item </span>
				<!-- Remove this if you don't implement routing -->
				<ul class="filters">
				${Object.keys(filters).map((type)=> {
				return	`<li><a class= ${type === filter && "selected"} href="#/" onclick = "dispatch('switchFilter','${type}')">${type[0].toUpperCase() + type.slice(1)}</a></li>`
				})}
					
				</ul>
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed" onclick = "dispatch('clearCPL')">Clear completed</button>
			</footer>
    `
}
export default  connect()(footer)