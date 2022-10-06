import storage from './localStorage.js'
const init = {
   todos: storage.get() || [],
   filter: 'all',
   filters: {
    all: () => true,
    active: (todo) => !todo.completed,
    completed: (todo) => todo.completed
},
    editIndex: null
}
const actions = {
    add: ({todos},title) => {
        if(title.trim()) {
            todos.push({title,completed: false})
        }
       storage.set(todos)
    },
    togle: (state,index,filter)=> {
        state.todos.filter(state.filters[filter])[index].completed = !state.todos.filter(state.filters[filter])[index].completed
        storage.set(state.todos)
    },
    togleall: ({todos},complete)=> {
        todos.forEach((todo)=> {
            todo.completed = complete
        })
        storage.set(todos)
    },
    destroy: (state,index,filter)=> {
        const titleFilter = state.todos.filter(state.filters[filter])[index].title
        const newIndex = state.todos.findIndex((todo)=> todo.title === titleFilter )
        state.todos.splice(newIndex,1)
        storage.set(state.todos)
    },
    switchFilter: (state,filter)=> {
        state.filter = filter
    },
    clearCPL: (state)=>{
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    editing: (state,index)=> {
        state.editIndex = index

    },
    endEdit: (state,value,filter)=> {
        if(state.editIndex || state.editIndex === 0) {
            state.todos.filter(state.filters[filter])[state.editIndex].title = value
        }
        state.editIndex = null
        storage.set(state.todos)
    }

}
export default function reducer(action,args,state = init,filter) {
    actions[action] && actions[action](state,args,filter)
            return state
    }
