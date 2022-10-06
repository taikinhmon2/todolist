export default function Loger(reducer) {
    return (action,args,preState,filter) => {
        console.group(action)
        console.log("preState :", preState);
        const nextReducer = reducer(action,args,preState,filter)
        console.log("newArgs :", args);
        console.log("newState :", nextReducer);
        console.groupEnd()
        return nextReducer
    }
} 
   