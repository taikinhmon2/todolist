import html from "../core.js";
export default function todoItem(todo,index,filter,editIndex) {
	return html`
    <li class=" ${todo.completed && 'completed'} ${index === editIndex && 'editing'}" >
			<div class="view">
				<input class="toggle" type="checkbox" 
				${todo.completed && "checked"}
				onchange = "dispatch('togle',${index},'${filter}')"
				>
				<label ondblclick = "dispatch('editing', ${index})">${todo.title}</label>
				<button class="destroy" onclick = "dispatch('destroy',${index},'${filter}')"></button>
			</div>
			<input class="edit" value="${todo.title}" onkeyup = "event.keyCode === 13  && dispatch('endEdit', this.value.trim(), '${filter}')">
	</li>
    `
}