import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch';

const TodoDetails = () => {

  const {todoId} =useParams();
  const {loading, data:todoList} =useFetch("https://jsonplaceholder.typicode.com/todos/"+todoId);
  return (
    <>
        {
        loading ? <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
            </div> :
            <div className='mt-5'>
                {JSON.stringify(todoList)}
            </div>
        }
    
    </>
  )
}

export default TodoDetails