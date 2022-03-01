import React from 'react'
import { Link } from 'react-router-dom'
import { questions } from '../App'
const QuestionList = () => {

  return (
    <ol className="list-group list-group-numbered">
        {questions.map(currQues=>(
            <Link to={`question/${currQues.id}`} key={currQues.id} state={currQues}>
                <li className="list-group-item" >
                {currQues.question}
                </li>
            </Link>
            
        ))
        }
    </ol>
  )
}

export default QuestionList