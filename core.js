
export default function html([first, ...strings], ...values) {
    return values.reduce((acc, cur) => acc.concat(cur,strings.shift()),
    [first]
    )
    .filter(x => x && x!==true || x ===0 )
    .join('')
}
export function creatStore(reducer) {
    let state =  reducer()
    const roots = new Map()
    function render() {
        for(const [root,component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }
    return {
        atach: (component,root) => {
            roots.set(root,component)
            render()
        },
        connect: (select = state => state)=> {
            return component => () => {
                return component(Object.assign({},select(state)))
            }
        },
        dispatch: (action, args,filter)=> {
            state = reducer(action,args,state,filter)
            render()
        }
    }
}
