const express = require('express');
const app = express();
const mongoose = require("mongoose");
const BlogSchema = require("./blogSchema");
const cors = require("cors");
// using express middleware for parsing req data
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect('mongodb+srv://saadab:c5Py7fLEkvU5OJzq@cluster0.kcejp.mongodb.net/test',function(error) {
    console.log("error is",error);
});

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
app.get('/',async (req,res)=>{

    console.log("hello")
    let result;
    try {
        result = await BlogSchema.find();
        
    } catch (error) {
        console.log(error);
    }
    return res.json(result);
})

// post return status 201 // created
app.post('/',async (req,res)=>{

    //await BlogSchema.create({...req.body});
    try {
        const blogSchema = new BlogSchema({...req.body});
        await blogSchema.save()
        res.status(201).json(blogSchema)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
    

    console.log("continue")
})


app.put("/:id",async (req,res)=>{

    //await BlogSchema.create({...req.body});
    try {
        const id = req.params.id;
        const blogSchema = await BlogSchema.findById(id);
        console.log(blogSchema)
        if(!blogSchema){
            throw new Error(" Not Found")
        }
        blogSchema.comments = req.body.comments || [];
        blogSchema.title = req.body.title || blogSchema.title;
        blogSchema.author = req.body.author;
        blogSchema.body = req.body.body || blogSchema.body;
        await blogSchema.save()
        res.status(201).json(blogSchema)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
    

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