const path = require('path')    // importing path module


// console.log(__filename,__dirname) 

// print current filename only
console.log(path.basename(__filename))

console.log(path.dirname(__filename))  // same as __dirname

console.log(path.extname('index.html'))  // return extension of file .html  etc


console.log(path.join(__dirname,'test','index.html'));   // join the path