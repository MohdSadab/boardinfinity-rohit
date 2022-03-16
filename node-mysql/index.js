const express = require('express');
const mysql = require('mysql');
const app= express();


// for parsing the req data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Sadab123@',
    database : 'quiz'
  });
   
connection.connect();
   
// connection.query('SELECT * from question', function (error, results, fields) {
// if (error) throw error;
// console.log('The solution is: ', results);
// });
   

// rest api 
//  get 
//  post 
//  update 
//  delete

const body={
    "question":"What is html ?",
    "answers" :[
        {
            "answer":"Programming",
            "is_correct":false
        },
        {
            "answer":"Programming",
            "is_correct":false
        },
        {
            "answer":"Programming",
            "is_correct":false
        },
        {
            "answer":"Programming",
            "is_correct":false
        }
    ]

}


app.post("/createQue",async (req,res)=>{

    let {question,answers}  = req.body;
    connection.query('insert into question set ?',{question}, (err,result)=>{

        if(err){
            return res.status(500).json({err:"Some Error occourd"})
        }

        const que_id = result.insertId;
        answers = answers.map(ans=>{
            return [ans.answer,ans.is_correct,que_id]
        });

        connection.query('insert into answers(answer,is_correct,fk_que) values ?',[answers], (err,result)=>{

            if(err){
                return res.status(500).json({err:"Some Error occourd"})
            }

            res.status(201).json({"success":"Successfully created",id:que_id})

        })
    })

})



[
    {
        "question":"djd",
        "answer" :[]

    }
]


app.get("/getQue",async (req,res)=>{

    let {question,answers}  = req.body;
    connection.query(' select * from question as Question inner join answers as Answer on Question.id=Answer.fk_que', (err,result)=>{

        if(err){
            console.log(err)
            return res.status(500).json({err:"Some Error occourd"})
        }

        let questions=result.map(data=>{
            return data.fk_que
        })

        questions = new Set(questions)
        questions =[...questions];

        // let final_result=[];
        // let que={}
        // for(let i=0;i<result.length;i++){
        //     for(let j=0;j<questions.length;j++){
        //         if(question[j]===result[i].fk_que){
                   
        //         }

        //     }
        // }

        res.status(201).json(questions)
    })

})





app.listen(4000, ()=>console.log(" app started on port 4000"))