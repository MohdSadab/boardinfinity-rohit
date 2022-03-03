
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './redux/actions/actionTypes';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import CompletedTodo from './components/CompletedTodo';

function App() {
  const state = useSelector(state => state);
  console.log(state)
  const dispatch = useDispatch();
  const incrementHandler = (val = 1) => {
    dispatch({ type: INCREMENT_COUNTER, payload: val });
  }

  const decrementHandler = (val = 1) => {
    dispatch({ type: DECREMENT_COUNTER, payload: val });
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>

          <Route path="/" element={<Todo />} />
          <Route path="add" element={<AddTodo />} />
          <Route path="complete" element={<CompletedTodo />} />
          <Route path="counter" element={<>
            <h1> counter: <span className='text-success'>{state.counter.count}</span> </h1>
            <button className='btn btn-primary mt-2' onClick={() => incrementHandler()}>
              Increment
            </button>
            <button className='btn btn-primary mt-2 ms-3' onClick={() => decrementHandler()}>
              Decrement
            </button>

          </>} />

        </Routes>
      </div>

    </>

  );
}

export default App;


// crud operation (create read update delete)