import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TODO } from '../redux/actions/actionTypes';
import Input from './Input'

// when you want to update the state you need to dispatch an action releted to update
const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const {allTodos} =useSelector(state=>state.todo);
    const addTodoHandler = () => {
        const payload={
            "userId": 1,
            "id": allTodos.length+1,
            "title": input,
            "completed": false
        }
        dispatch({type:ADD_TODO,payload:payload})
    }
    return (
        <div className='container'>
            <h1 className="mt-3">Todo</h1>
            {/* <UnControlledInput /> */}
            <Input type="text" onChangeHandler={(e) => setInput(e.target.value)} />
            <button className="btn btn-primary mt-1 btn-fluid" onClick={addTodoHandler}>Add</button>
        </div>
    )
}

export default AddTodo