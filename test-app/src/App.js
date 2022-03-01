import './App.css';
import QuestionList from './components/QuestionList';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Question from './components/Question';

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

  }
]


function App() {
  return (
    <div>
        <Navbar />
        <div className="container mt-3">
         
          <Routes>
            <Route path="/" element={ <QuestionList />} />
            <Route path="*" element={ <h1 className='mt-5'>Not Found</h1>} />
            <Route path="question/:quesId" element={<Question />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
