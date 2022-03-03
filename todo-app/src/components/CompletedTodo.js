import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

const CompletedTodo = () => {

  const {todo}=useSelector(state=>state);
  const completedTodo= todo.allTodos.filter(item=>item.completed)
  return (
    <div className='container'>
    <h1 className='my-3'>Todo List {completedTodo.length}</h1>
    <ul className="list-group mt-1">
     {
        completedTodo.map((item, index) => (
          <TodoItem key={item.id} item={item} />
        ))
      }

    </ul>
  </div>
  )
}

export default CompletedTodo