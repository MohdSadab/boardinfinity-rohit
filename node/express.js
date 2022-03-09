const express = require('express');
const loggerObj = require('./Event/event');
const router = require("./router");
const app = express();

// using express middleware for parsing req data
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// intercept all the routes starting with /users
// app.use("/users",(req,res,next)=>{

//     console.log(req.baseUrl,req.originalUrl,">>>>>")
//     next();
// })


app.use((req,res,next)=>{

    console.log(req.protocol,">>>>>")
    next();
})

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
app.get('/userrr',(req,res)=>{

    return res.redirect('/post/new')
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

app.use("/users",router)

app.listen(4000, ()=>{
    console.log('app started')
})