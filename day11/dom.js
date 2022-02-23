
// console.log(document.getElementById("root")) find element by id is qual to root (return single element)
// console.log(document.getElementsByClassName("child")) find elements by class name is equal to child (return array of element)
// console.log(document.getElementsByTagName("div")) find elements by tag name is equal to div (return array of element)

// querySelector wil return first element 
// console.log(document.querySelector(".child-2"),document.querySelector("#root"),document.querySelector("div"))
// // return array of nodelist
// console.log(document.querySelectorAll(".child-2"),document.querySelectorAll("#root"),document.querySelectorAll("div"))


let currElement=null;

// step 1 => need input value that is enter by the user
function getInputValue(){

    const elem = document.querySelector("#userInput");
    // console.log( elem.getAttribute('id'))
    const value = elem.value;
    return value;
}

// step=>2 need to create an element
function createElement(name){
    return document.createElement(name)
}

// step=>3 need to set innertext get by step 1(user);

function setInnerText(){
    const divElem= createElement('div');
    divElem.innerText = getInputValue();

    divElem.addEventListener('click',function(event){
        
        // we get the clicked element
        // console.log(event.target)
        // step 1=> get the inner text of clicked element
        const value = this.innerText;
        currElement=this;
        // step 2=> update the current input value to above value
        const inputElem= document.querySelector("#userInput");
        inputElem.value=value;


    })
    return divElem;
}

// step=> 4 find the place where you want to insert the newly created element
function findElement(event){

    // event.target is same as document.findByElement
    // event.target refer to that element from where the event is invoked(genrated)
    console.log(event.target);
    const root= document.querySelector("#root");
    const newlyCreatedElement= setInnerText();

    // add the newly created element in real dom
    root.appendChild(newlyCreatedElement)

    // clear the input after append child

    const elem = document.querySelector("#userInput");
    elem.value='';
}

// second functionality user can able to update the record

function updateElement(event){

    // step 1=> extract current input value;
    const value = getInputValue();

    // the element which is clicked we need to update the innerText
    if(currElement){
        currElement.innerText=value;
        currElement=null;
        // set input blank
        const elem = document.querySelector("#userInput");
        elem.value='';
    }
}

// how to remove dom element

// event bubling
function stopBubbling(event){
    if(event.currentTarget.getAttribute('class')==='child')
     event.stopPropagation();
}

function childOfChild(event){
    console.log('childofchild',event.target,event.currentTarget)
}



// onkeypress 
// onkeydown onkeyup

function validateForm(event){

    event.preventDefault();
    const email = document.querySelector("#email").value;
    if(!email.includes('@')){
       alert('Email must contain @ valid') 
       return false;
    }

    if(!email.includes('.')){
        alert('Email must contain .') 
        return false;
    }

    const password = document.querySelector("#password").value;

    if(password.length<6){
        alert('password must be greater than 5 character')
        return false;
    }

}