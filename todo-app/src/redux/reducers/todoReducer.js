

// reducer is a pure function which takes currstate and action as an argument and returns new state

import { LOAD_TODO_LIST,ADD_TODO,DELETE_TODO,MARKED_TODO,LOADING } from "../actions/actionTypes"


// thunk function (is a function that returns a asynchronous function having dispatch and get state as an argument)
export function getTodos(){

    return async function(dispatch,getState){

       dispatch({type:LOADING,payload:true});
       const response= await fetch('https://jsonplaceholder.typicode.com/todos')
       const data = await response.json();
       dispatch({type:LOAD_TODO_LIST,payload:data});
       dispatch({type:LOADING,payload:false});
    }
}




const initState={
    loading:false,
    allTodos:[],
    error:''
}


//  pure function same input same output you can tell next state buy seeing input
const todoReducer =(state=initState,action)=>{

    switch(action.type){

        case LOAD_TODO_LIST:
            // don not mutate state return new state
           return {...state,allTodos:action.payload}
        
        case ADD_TODO:
            return {...state,allTodos:[action.payload,...state.allTodos]}

        case DELETE_TODO:
            return state
        
        case MARKED_TODO:
            const finalTodos= state.allTodos.map(currTodo=>{
                if(currTodo.id===action.payload.id){
                    currTodo.completed=action.payload.completed
                }
                return currTodo
            })
            return {...state,allTodos:finalTodos}

        case LOADING:
            return {...state,loading:action.payload}

        default:
            return state
    }
}


export default todoReducer

