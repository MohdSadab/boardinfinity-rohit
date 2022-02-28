import './App.css';
// import WaterState  from './components/Water';
import React from 'react';
// import Hooks from './components/Hooks';
import Todo from './components/Todo';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import TodoDetails from './components/TodoDetails';
import AddTodo from './components/AddTodo';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state={toggle:true}
  }

  // toggleHandler = ()=>{

  //   // this.setSTate is asynchronous 
  //   // this.setState((prevState,prevProps)=>{
  //   //   return{toggle:!prevState.toggle}
  //   // })

  //   // this does not work
  //   this.state.toggle = !this.state.toggle;
  // }

  render() {
    return (
      <div className="App">
        <Navbar />
         <Routes>
           <Route path="">
                <Route index element={<Todo />} />
                <Route path=":todoId" element={<TodoDetails />} />
            </Route>
           <Route path="add" element={<AddTodo />}/>
         </Routes>

          

      </div>
    );
}

}

export default App;
