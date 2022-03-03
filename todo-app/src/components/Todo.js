import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/reducers/todoReducer';
import TodoItem from './TodoItem';



// {id:1,title,status}
const Todo = () => {


  const dispatch=useDispatch();
  const todo= useSelector(state=>state.todo);

  useEffect(()=>{
    // dispatching thunk function for asynchronous action to get the data
    if(todo.allTodos.length===0){
        dispatch(getTodos())
    }
  },[dispatch])

  return (
    <div className='container'>
      <h1 className='my-3'>Todo List</h1>
      <ul className="list-group mt-1">

        {todo.loading ? <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> :
          todo.allTodos.map((item, index) => (
            <TodoItem key={item.id} item={item} />
          ))
        }

      </ul>
    </div>
  )
}

export default Todo