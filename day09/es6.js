// // // basics of es6
// // // map similar as object but minor change in map key can be anydatatype

// // const map = new Map();
// // // add the item to map
// // map.set(1, "i am number");
// // map.set('1', "i am string");

// // // get the item from map using key as an argument
// // console.log(map.get(1));
// // console.log(map.get('1'));

// // let obj={
// //     1:"i am number" ,
// //     '1': "i am string"
// // }

// // console.log(obj);

// // // map.delete(key) remove item from map
// // map.delete(1)
// // // console.log(map.get(1));

// // let initMap = new Map([
// //     ['initkey',"Value"],
// //     [true,"boolean"],
// //     [1,"number"]
// // ])

// // console.log(initMap.get('initkey'),initMap.size);

// // //  has method used for checking a key in map if present return true else false
// // console.log(initMap.has(1))

// // // foreach
// // console.log("============")
// // initMap.forEach((value,key)=>{
// //     console.log(value,key);
// // })

// // //  set math 
// // //  no duplicate
// // const myset = new Set([5,2,3,3,2,1,4]);
// // myset.add(10)

// // console.log(myset,myset.has(2),myset.has(6));


// // myset.delete(10)
// // myset.forEach((value)=>console.log(value));

// //  es6 

// // destructuring

// let person = {
//     name:"rohit",
//     address:{
//         "state":"U.P",
//         country:"India",
//         pin:{
//             no:"shshshs"
//         }
//     }
// }

// // address is refrence variable on change in address reflect on person and vice versa
// const {name,address}= person;

// const {pin} =address;
// address.state="M.P."

// console.log(address,person,pin)

// //  ... rest operator

// const arr1= [1,2,3,4,5];
// // const arr2 = [10].concat(arr1)
// const arr2 = [10,...arr1]
// console.log(arr2);

// const person2={
//     ...person,
//     name:"Sadab"
// }


// function addArgs(...arr){
//    return arr.reduce((previousValue,currentValue)=>{
//        return previousValue+currentValue
//    })
// }

// console.log("sum",addArgs(5,2,3,4));

// //  shallow copy deep copy
// //  rest operator is  shallow copy
// //  shallow copy means nested object is passed by refrence it is not a new refrence

// // person2.address.state="shhshs"
// // console.log(person2,person)


// //  deep copy derefrenced all the things and create new obj

// const person3 = JSON.parse(JSON.stringify(person));
// person3.address.state="shhshs"
// console.log(person3,person)


// //  map, filter, reduce 

// // map ( is a function that takes callback as an argument modified the elements of array and return new array);
// const squaredArray= arr1.map((value)=>{
//  return value*value;
// })


// // filter ( is a function that takes callback as an argument and filters the array return new array);

// const evenNumber =  arr1.filter((value)=>{
//     return value%2===0
// })

// const oddNumber =  arr1.filter((value)=>{
//     return value%2!==0
// })
// // evenNumber.push(6)
// console.log(evenNumber,oddNumber,arr1)


// // reduce (The reduce() method executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element)



// //  synchronous asyncronous execution

// console.log(" i am first");

// setTimeout(()=>{
//     console.log(" i am second")
// },1000)

// setTimeout(()=>{
//     console.log(" i am third")
// },100)

// console.log(" i am last")


// //  callback hell 
// setTimeout(()=>{
//     console.log(" i am second")
//     setTimeout(()=>{
//         console.log(" i am third")
//         console.log(" i am last")
//     },100)
// },1000)


//  promise ( is the javascript object having 3 state)
/**
 * pending
 * resolved
 * rejected
 */

const promise1 = new Promise((resolve,reject)=>{
    console.log("started")
    setTimeout(()=>{
       console.log("i am first")
       resolve('i am resolved') 
    },1000)
})


const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log("i am second") 
       resolve()
    },100)
})

promise1.then(data=>{
   console.log("dat",data)
   return data
}).then(data=>{
    console.log("ended")
}).catch(error=>{
    console.log(error,">>>>>>>>>>>")
})