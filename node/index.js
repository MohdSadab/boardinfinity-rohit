// REST API ( Represental state transfer application interface)
// GET METHOD (FOr data fetching)
// POST METHOD (Creating data )
// DELETE METHOD (deleting data)
// PUT METHOD (for updating existing data)
//  simple end point 

// module fs, http, path, event etc

// global module console, __dirname you don't need to import

// http module

// node js single threaded event driven asynchronous javascript runtime enviorment used for building fast and large application
// paypal netflix google
// es5 
// nodemon used for development purose to restart the server with new changes
const http = require('http');


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


const server =http.createServer((req,res)=>{
    // req.url prints the path 

    console.log("server created",req.url, req.method);
    console.log(req.headers)
    console.log(req.headers.host)

    if(req.url==="/" && req.method=='GET'){

            res.setHeader('Content-Type', 'text/json')
            return res.end(JSON.stringify(todos))
    }

    if(req.url==="/" && req.method=='POST'){
        let temp=''
        req.on('data',(chunk)=>{
            temp+=chunk.toString();
            console.log(temp,">>>>")
        })

        req.on('end',()=>{
            temp=JSON.parse(temp)
            todos.push(temp);
            res.setHeader('Content-Type', 'text/json')
            return res.end(JSON.stringify(todos))  
        })
        
}



    // res.end('<h1>Hello World</h1>')
})


// server.listen(4000,()=>console.log("server listen port no 4000"))