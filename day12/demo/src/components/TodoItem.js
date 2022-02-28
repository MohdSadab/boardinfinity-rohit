import React from 'react'
import { Link } from 'react-router-dom';

const TodoItem = (props) => {

  const {item} =props;
  return (
        <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
           <Link to={`${item.id}`}>
              <div className="ms-2 me-auto">
                  <div className="fw-bold">{item.title}</div>
              
              </div>
            </Link>
            <span className="badge bg-primary rounded-pill text-capitalize">{item.status}</span>
        </li>
  )
}

export default TodoItem