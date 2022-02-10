// single line comment in javascript
/**
  multi line comment in  javascript

  javascript single threaded event driven non blocking scripting language
*/

console.log("varname",var_name)
console.log("normal fun", fun_name)
// declaration of variable;
var var_name=10; 
var var_name1=10;
// var_name can not be reserved keyword(eg: let, const, var, function, this, etc) and can not start with number and special symbol except $'
//  variables are dynamic type we can assign any datatype to variable
// var a;
// a=1;
// a='shshsh'
// a=[1,2]

// javascript have mainly two data type
// 1-> primitive data type (Number, String, Null, Undefined, Boolean)
// 2-> non primitive (function, arr, object, set, map, etc) object

//  primitive can not mutate
// non primitive can be mutate

//  array is the list of values we can assign multiple datatype in array;
var arr1 = [1,"baba",2,{"test":"shshs"}];
var arr2 = new Array();
var arr3=[];

let a=1;
let b=2;
let c= a+b;
c+=2; //c=c+2;

c++;  //post_increment
++c;   // pre_increment
console.log(c);

//  post increment
let temp;

// temp=a+b+c++; 
temp=a+b+ ++c*5; 

console.log(temp,c);

// let y = "5" + 5;
// output="55"
//  first step check operator if +
//  second step check both operand data type 
//  if one is string then it will convert others operand to string

let y = "5"-3;
console.log(y);
//  converts "5" to number

//  == compaire only value not data type
//  === compaire value with data type

console.log("1"==1);
console.log("1"===1);
// ternary operator expression (condition?true:false)
let asg= 4>5?"four is greater then 3":"wororo";
// let asg= 4>5?"four is greater then 3":3>5?"SJDJJD":"djjdjd"; don't do this


console.log(asg)

// conditional block

if(a<b && a>0){
    console.log("if executed")
}else{
    console.log("else executed")
}

// a=-1;
//  multiple if else
if(a<b && a>1){
    console.log("if executed")
}else if (a==1){
    console.log("a==1 executed")
}else{
    console.log("last block executed")
}

// learn switch by yourself 

// for (statement 1; statement 2; statement 3) {
//     // code block to be executed
//  statement1: is initialization  
//  statement2: is condition
//  statement3: is incrementation (updation)
// }
// var i;
// for(i=0;i<arr1.length;i++){
//     console.log(arr1[i],i,">>>>")
// }

// var i;
// for(i=0;i<arr1.length;){
//     i++;
//     console.log(arr1[i],i,">>>>")
// }
var i=5;
var text='';
// while (i < 5) {
//     text += "The number is " + i +"\n";
//     i++;
// }

//  do while execute the block statements at least one whether condition tru or false
// do {
//     text += "The number is " + i;
//     i++;
// }
// while (i < 5);

// for (let i = 0; i < 10; i++) {
//     if (i === 3) { 
//         break; 
//     }
//     text += "The number is " + i + "\n";
// }


// for (let i = 0; i < 10; i++) {
//     if (i === 3) { 
//         continue; 
//     }
//     text += "The number is " + i + "\n";
// }

//  types of function
//  anonymous
//  normal
//  arrow
//  callback function

// normal function
fun_name(1,[12,3,3,3]);
function fun_name(para1,para2){
    console.log("i am normal function",para1,para2)
}


const anonymous = function(){
    console.log("i am anonymous function")
}

anonymous()

// const arrow_func = ()=>{
//     console.log("i am arrow function")
// }

// arrow_func();


// callback_fn is taking function as a parameter
const arrow_func = (callback_fun)=>{
    callback_fun()
}

arrow_func(anonymous);


// hoisting in javascript

//  scope (variable accessbility)

function var_scope(){
    
    console.log(inner_scope,">>>>>>>>>>");
    var inner_scope=10;
    console.log(inner_scope,"ooooooooo");
}

var_scope();

//  var scope is functional level

//  let ,const scope block level 

{
    let block=1;
    console.log("block",block);
}

const PI=3.14;
PI=5