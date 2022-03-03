

// reducer is a pure function which takes currstate and action as an argument and returns new state

import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/actionTypes"

const initState={count:0}
//  pure function same input same output you can tell next state buy seeing input
const counterReducer =(state=initState,action)=>{

    switch(action.type){

        case INCREMENT_COUNTER:
            // don not mutate state return new state
            console.log(action.payload)
            return {...state,count:state.count+action.payload}
        
        case DECREMENT_COUNTER:
            return {...state,count:state.count-action.payload}

        default:
            return state
    }
}


export default counterReducer

