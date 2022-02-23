// constructor is a function which is created using new keyword

function Polygon(width,height){

    this.width=width;
    this.height=height;
}

const polygon= new  Polygon(10, 20);
// // area function is associated with only current instance if we create new object we can not call area function
// polygon.area=function(){
//     return polygon.width*polygon.height;
// }

// it gives error because area function is not attached with current obj
const polygon2=new  Polygon(30, 20);
// console.log(polygon2.area());


//  javascript uses prototype chain inheritance
let arr=[];


// arr.__proto__ == Array.prototype
// arr.__proto__.__proto__ == Object.prototype 
// arr ---> Array.prototype ----> Object.prototype  -----> null

arr.push(200)

// it is not recommended (not optimized)
// arr.__proto__.add5ToFirstElement = function(){

//     return arr[0]+5;
// }


// function helloWorld(){

//     console.log("hello world")
// }
// Object.setPrototypeOf(arr, helloWorld)

// inherit add5ToFirstElement in all array
// Array.prototype.add5ToFirstElement=function(){

//     return arr[0]+5;
// }

// let arr2 =[]
// console.log(arr,arr2);

// Polygon.prototype.area=function(){
//     return this.width*this.height;
// }

// console.log(polygon.area(),polygon2.area());

let object ={
    name: "Sadab",
    age: 25,

    getIntro(){
        console.log(`${this.name} and ${this.age}`);
    }
}


let object2 ={
    name :"Rohit"
}

// object2.__proto__ = object;

// console.log(object,object2)
// console.log(object2.name, object2.age)
// object2.getIntro()
// object.getIntro()

// closure
//  is a way by which a function can access the outside variable 

// let a=20;

// function closure(){
//     console.log(a);
// }

// closure();

function add(a){

    console.log(a);
    return function add2(b){
        return a+b;
    }
}

// console.log(a); throw error a is not defined
const callback = add(10);
console.log(callback(20));