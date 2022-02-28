import React, { useState } from 'react'
import Input from './Input'

const AddTodo = () => {
    const [input, setInput] = useState('');
    const addTodoHandler = () => {
        // setTodoList([
        //   ...todoList,
        //   {
        //     id: Date.now(),
        //     title: input,
        //     status: "pending"
        //   }
        // ])
        console.log(input);
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