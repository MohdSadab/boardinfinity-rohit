import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { questions } from '../App'

const Answer = ({ answers = [],setHistory }) => {

    // const inputRef = useRef(null);
    const [value,setValue]=useState([])
    const {state} = useLocation();
    
    const navigate = useNavigate();
    const [msg,setMessage] =useState({type:"",msg:''});

    const cName= msg.type==='Success'? 'alert alert-success': 'alert alert-danger';
    console.log(cName)
    const submitHandler = () => {
        // console.log( inputRef.current.value)
        console.log(value,state)
        let isCorrect=false;
        for(let i=0;i<state.answers.length;i++){
            for(let j=0;j<value.length;j++){
                console.log(state.answers[i].id===value[j].id && state.answers[i].isCorrect===value[j].val, value[j],state.answers[i])
                if(state.answers[i].id===value[j].id && state.answers[i].isCorrect===value[j].val){
                    isCorrect=true;
                }else if(state.answers[i].id===value[j].id){
                    isCorrect=false;
                }
            }
        }

        if(isCorrect){
            console.log("hello")
            setMessage({'msg':"Correct Answer",type:"Success"})

        }else{
            setMessage({'msg':"Wrong Answer",type:"Error"})
        }
        setHistory(prev=>[...prev,state.question])
        let que= questions.filter(curr=>curr.id===state.id+1);
        setValue([])
        navigate(`/question/${state.id+1}`,{state:que.length>0 ? que[0] :{questions:'End Test'}})
    }

    const setAnswerHandler =(e)=>{
        const val=e.target.checked
        const id = +e.target.getAttribute('data-id')
        setMessage({type:"",msg:""})
        setValue(prev=>{
            const arr = prev.filter(curr=>(curr.id !== id ));
            if(val){
                arr.push({id,val})
            }
            setValue(arr);
        })
        
    }
    return (
        <div className='d-flex flex-column justify-content-between'>
            {answers.map(answer => {
                return (
                    <React.Fragment key={answer.id}>
                        <div className="form-check form-switch">
                            <input className="form-check-input" 
                                   type="checkbox" 
                                   id="flexSwitchCheckDefault"
                                   defaultValue={false} 
                                   data-id={answer.id} 
                                   onChange={setAnswerHandler} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{answer.ans}</label>
                        </div>
                    </React.Fragment>
                )
            })
            }

            <div className='text-end'>
                <button className="btn btn-primary me-3" onClick={submitHandler}>
                    Submit
                </button>
                <button className="btn btn-secondary " onClick={()=>navigate(-1)}>
                    Skip
                </button>
            </div>

            {msg.msg && 
                <div className={cName} role="alert">
                    {msg.msg}
                </div>
            }
        </div>
    )
}

export default Answer