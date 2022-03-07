const fs = require('fs');
const path = require('path')

// file system module used for creating updating deleting file in local

//  used for creating directory asynchronous 
// fs.mkdir(path.join(__dirname,'test'), (err,path)=>{
//     console.log(err, path)
// })
// console.log(" test created")
// synchronous
// const res=fs.mkdirSync(path.join(__dirname,'test2'))
// console.log(res)
// console.log(" test2 created")

// create new file and write the data if it does not exist if it is exist it replace the old data with new one
fs.writeFile(path.join(__dirname,'test','index.html'),'<h1>New file created and try to add new data</h1>',function(err){

    if(err){
        console.log('error occoured')
    }
})


fs.appendFile(path.join(__dirname,'test','index.html'),'<h1>Appended data</h1>',function(err){
    if(err){
        console.log('error occoured')
    }
})

//  for reading the file data 
fs.readFile(path.join(__dirname,'test','index.html'), function(err,data){
    console.log(data.toString())
})
