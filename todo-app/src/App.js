
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from './redux/actions/actionTypes';
// import Navbar from './components/Navbar';

function App() {
  const state = useSelector(state => state);
  console.log(state)
  const dispatch=useDispatch();
  const incrementHandler=(val=1)=>{
    dispatch({type:INCREMENT_COUNTER,payload:val});
  }

  const decrementHandler=(val=1)=>{
    dispatch({type:DECREMENT_COUNTER,payload:val});
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <h1> counter: <span className='text-success'>{state.count}</span> </h1>
        <button className='btn btn-primary mt-2' onClick={()=>incrementHandler()}>
          Increment
        </button>
        <button className='btn btn-primary mt-2 ms-3' onClick={()=>decrementHandler()}>
          Decrement
        </button>
      </div>

    </>

  );
}

export default App;
