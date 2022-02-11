//  arr, object, string;
//  javascript primitive non primitive 
//  non primitive (arr,func obj, etc)


//  first and recommended
let obj={};
console.log(obj)
// second
let obj2= Object.create({});
console.log(obj2)

obj ={
    int: 1,
    int2: 1,
    string: "string",
    arr: [1,2,3],
    obj:{
        key: 1
    },
    helloWorld:function(){
        console.log("Hello world")
    }
}
// key is unique (value can be any data type)

//  object (non-primitive datatype) pass by refrence 
//  primitive pass by value
// console.log(obj)

//  accessing object value
//  1fst method
// console.log(obj.arr)
// console.log(obj.obj)
// obj.helloWorld()

// // second method
// console.log(obj['arr'])
// console.log(obj['obj'])
// obj['helloWorld']()

// pass by refrence

function addKeyToObject(obj2){
    obj2.newKey= 'if newKey is present then it update value else it add this key value in obj'
    obj2.arr[0]='new'
}

// console.log(obj,"before");
// addKeyToObject(obj)
// console.log(obj,"after")

let newObj= obj.obj;

newObj.key=3;
console.log(newObj,"old obj", obj.obj)


// pass by value
// let int= obj.int;
// int = 5;

// console.log(int, "old int", obj.int)

// let str="helloworld"
// let arr = str.split('');
// arr[0]='p'
// str= arr.join('')
// console.log(str);

// refrence in const
const cars = ["Saab", "Volvo", "BMW"]; // cars store the refrence(address) of this array
cars[0]="volvo"
// cars= [1,2]  // gives error it can't update to new address

let multiarr= [[7,9,8],[3,4,5],[6,7]];
// console.log(multiarr[0][0],multiarr[1][2]);
for (let row=0;row<multiarr.length;row++){
    // for(let col=0;col<multiarr[row].length;col++){
        console.log("row,col",row,"  value ",multiarr[row]);
    // }
}


let arr = [10,20,90,100,50];

// by default takes items as an string
arr.sort();

// sort by int

arr.sort((a,b)=>a-b)


arr.forEach((val)=>console.log(val))


//  adding element in arr at end
arr.push(12)


console.log(arr);

// is arrr
console.log(Array.isArray([1,2,3]),Array.isArray(1))

//  removing element from last
arr.pop(); // update the previous array
console.log(arr);

// shift remove first element and update the previous array
arr.shift();
console.log(arr)

// unshift add element in the begging of arr update the  curr array 
arr.unshift(-5);
console.log(arr)

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// concat merge two array and returns new array
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// splice used to remove element from any index in array

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1); // remove Apple from array splice(startIndex, numberOfelement-remove-after-that)
// console.log(fruits)

//  slice creates new array does not update old one
//  slice(start, end)    start included end excluded [1,3)

console.log(fruits.slice(1,3).toString())

let x = "John"; // primitive string
let y = new String("John"); // object string

console.log(x==y,x===y);


let name ="Sadab"

let msg = 'my name is'+name
console.log(msg)

let templateLiteral = `
my name
is ${name}
`
console.log(templateLiteral)
