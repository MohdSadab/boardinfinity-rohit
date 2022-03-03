import React from 'react'
import { useLocation } from 'react-router-dom'
import Answer from './Answer'

const Question = ({setHistory}) => {

    const location=useLocation()
    const { id,question, answers }= location.state
    return (
        <div className="card">
            <div className="card-header">
                Question {id}
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {question}
                </h5>
                <div className="card-text">
                    <Answer answers={answers} setHistory={setHistory}/>
                </div>
            </div>
        </div>
    )
}

export default Question