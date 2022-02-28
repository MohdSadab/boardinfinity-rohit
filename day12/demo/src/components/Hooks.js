import React, { useEffect, useState } from 'react';


//  all the hooks are Started with use (name convention)

// in react we do not mutate(directly change ) the previous state it will not trigger re render

// valid jsx array , null , string , elements which have one root , 
// object is not a valid jsx
export default function Hooks(props){

   // useState is a hook that takes initial state as an argument  and returns currState and a function to setThat State
//    const [count,setCount] =useState(0)

//    const [saveCount,setSaveCount] =useState([]);

    const [countHistory,setCountHistory] =useState({
        count:0,
        list:[]
    })


    // it will call each time when component is render

    // useEffect(()=>{
    //     console.log("called each time")
    // })

    // useEffect as a componentDidMount (called only once)
    useEffect(()=>{
        console.log("useEffect as a component did Mount called")

        // this return function is used for component will unmount
        return ()=>{
            console.log(" un mount called")
        }
    },[])

    // useEffect as a componentDidUpdate (called only when dependecy array variable changes)
    useEffect(()=>{
        console.log("useEffect as a component did Update called when ",countHistory.count," changes")
    },[countHistory.count])


    


    const incCountHandler = ()=>{
        console.log(" increment ")
        setCountHistory((prevState)=>{

            return {
                ...prevState,
                count:prevState.count+1
            }
        })
    }

    const setSaveCountHandler =()=>{

        setCountHistory((prevState)=>{

            return {
                ...prevState,
                list:[...prevState.list,prevState.count]
            }
        })
    }
    return (
        // <React.Fragment>
        //     <h1> counter {count}</h1>

        //     <button onClick={()=>setCount((prevCount)=>prevCount+1)}> Increment </button>

        //     {/* we do not mutate state if we do so then it will no trigger re render in case of objects */}
        //     {/* saveCount.push(count) this will update state but will not trigger re rendering it is an example of direct mutation */}
        //     {/* [...saveCount,count] it is new array which contains all the previous state  */}
        //     <button onClick={()=>setSaveCount([...saveCount,count])}>Save</button>

        //     <div>{saveCount}</div>
        // </React.Fragment>
        <React.Fragment>
            <h1> counter {countHistory.count}</h1>

            <button onClick={incCountHandler}> Increment </button>
            <button onClick={setSaveCountHandler}>Save</button>

            <div>{countHistory.list}</div>
        </React.Fragment>
    )

}
