const keyStorage = 'todos'
export default {
    set: (todos) => {
        localStorage.setItem(keyStorage,JSON.stringify(todos))
    },
    get: ()=> {
      return JSON.parse(localStorage.getItem(keyStorage)) 
    }
}