const express = require('express');
const mysql = require('mysql');
const { getQuestions, getAnswers, deleteQuestion } = require('./service');
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
    
    const que_result = await getQuestions(connection);
    const ids=que_result.map(result=>result.id)
    const result = await getAnswers(connection,ids);
    
    console.log(result)

    let final_result =  que_result.map(que=>{
        let answers=[];

        result.forEach((curr)=>{
            if(curr.fk_que===que.id){
                answers.push(curr);
            }

        })

        return {id:que.id,question:que.question,answers}
    })


    res.status(201).json(final_result)
    
})


app.delete("/deleteQue/:id",async (req,res)=>{
    const id = req.params.id;
    console.log(id);
    try {
        const result= await deleteQuestion(connection,id)
        return res.status(200).json({"messgae":`Question id ${id} successfully deleted`});
    } catch (error) {
        return res.status(error.code || 500).json(error.message || "Some Error Occoured")
    }   
})


// let obj={

//     id:1,
//     "question":"dhdhhd ?",
//     answers:[
//         {
//             "id":1,
//             "answer":"hdhhd"
//         }
//     ]
// }


app.listen(4000, ()=>console.log(" app started on port 4000"))