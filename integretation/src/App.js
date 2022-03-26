import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

function App() {
  const inputRef= React.useRef(null)
  useEffect(()=>{
    fetch("http://localhost:4000/").then(res=>{
     return res.json()
    }).then(data=>{
      console.log(data)
    }).catch(error=>{
      console.log(error)
    })
  },[])

  const addHandler =()=>{
    fetch("http://localhost:4000/post",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        title:inputRef.current.value
      })
    }).then(res=>{
      console.log(res);
    }).catch(error=>{
      console.log(error)
    })
  }
  return (
    <div className="App">
      
      <div style={{margin:10}}>
        <input name="title" ref={inputRef}/>
      </div>
      <button onClick={addHandler}>
          Add 
      </button>
    </div>
  );
}

export default App;
