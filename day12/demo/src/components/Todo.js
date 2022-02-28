import React from 'react'
import TodoItem from './TodoItem';
import useFetch from './useFetch';



// {id:1,title,status}
const Todo = () => {

  const {loading,data:todoList} = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <div className='container'>
      <h1 className='my-3'>Todo List</h1>
      <ul className="list-group mt-1">

        {loading ? <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> :
          todoList.map((item, index) => (
            <TodoItem key={item.id} item={item} />
          ))
        }

      </ul>
    </div>
  )
}

export default Todo