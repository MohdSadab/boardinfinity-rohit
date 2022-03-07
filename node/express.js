const express = require('express');
const loggerObj = require('./Event/event');

const app = express();

// using express middleware for parsing req data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

let todos =[
    {
        id:1,
        "title":"Hello"
    },
    {
        id:2,
        "title":"Hello2"
    },
    {
        id:3,
        "title":"Hello3"
    }
]

// get status 200 O.K.
app.get('/',(req,res)=>{

    res.json(todos)
})

// post return status 201 // created
app.post('/',(req,res)=>{

    todos.push(req.body)
    loggerObj.log('Post is created successfully')
    res.status(201).json(todos)

    console.log("continue")
})


app.delete('/:id',(req,res)=>{

    const id = req.params.id;
    console.log(id)
    todos = todos.filter(todo=>todo.id!== +id);
    // todos.push(req.body)
    console.log(todos)
    res.status(200).json(todos)

    // console.log("continue")
})

app.listen(4000, ()=>{
    console.log('app started')
})