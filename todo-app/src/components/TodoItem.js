import React from 'react'
import { useDispatch } from 'react-redux';
import { MARKED_TODO } from '../redux/actions/actionTypes';


const TodoItem = (props) => {

  const {item} =props;
  const dispatch = useDispatch();
  return (
        <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
          
              <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
              
              </div>
            <span className="badge bg-primary rounded-pill text-capitalize">
            <input className="form-check-input" 
                                   type="checkbox" 
                                   id="flexSwitchCheckDefault"
                                   checked={item.completed} 
                                   onChange={()=>dispatch({type:MARKED_TODO,payload:{id:item.id,completed:!item.completed}})} />
            </span>
        </li>
  )
}

export default TodoItem