import './App.css';
import QuestionList from './components/QuestionList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Question from './components/Question';
import { useState } from 'react';
import History from './components/History';

export const questions=[

  {
    question:"Founder of react ?",
    id:1,
    answers:[
      {
        'id':1,
        ans: 'Google',
        isCorrect: false
      },
      {
        'id':2,
        ans: 'Amazon',
        isCorrect: false
      },
      {
        'id':3,
        ans: 'Facebook',
        isCorrect: true
      },
      {
        'id':4,
        ans: 'Netflix',
        isCorrect: false
      }
    ]

  },
  {
    question:"Html language is ?",
    id:2,
    answers:[
      {
        'id':1,
        ans: 'Programming',
        isCorrect: false
      },
      {
        'id':2,
        ans: 'Machine Language',
        isCorrect: false
      },
      {
        'id':3,
        ans: 'HighLevel',
        isCorrect: false
      },
      {
        'id':4,
        ans: 'Markup',
        isCorrect: true
      }
    ]

  },
  {
    question:"Javascript language is ?",
    id:3,
    answers:[
      {
        'id':1,
        ans: 'Programming',
        isCorrect: true
      },
      {
        'id':2,
        ans: 'Machine Language',
        isCorrect: false
      },
      {
        'id':3,
        ans: 'HighLevel',
        isCorrect: false
      },
      {
        'id':4,
        ans: 'Markup',
        isCorrect: false
      }
    ]

  },
  {
    question:"Express is  a framework of?",
    id:4,
    answers:[
      {
        'id':1,
        ans: 'Nodejs',
        isCorrect: true
      },
      {
        'id':2,
        ans: 'Python',
        isCorrect: false
      },
      {
        'id':3,
        ans: 'PHP',
        isCorrect: false
      },
      {
        'id':4,
        ans: 'Javascript',
        isCorrect: false
      }
    ]

  }
]


function App() {
  const [history, setHistory] =useState([]);
  return (
    <div>
        <Navbar />
        <div className="container mt-3">
         
          <Routes>
            <Route path="/" element={ <QuestionList />} />
            <Route path="history" element={ <History history={history}/>} />
            <Route path="*" element={ <h1 className='mt-5'>Not Found</h1>} />
            <Route path="question/:quesId" element={<Question setHistory={setHistory}/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
