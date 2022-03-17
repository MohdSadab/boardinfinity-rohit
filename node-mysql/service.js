


async function getQuestions(connection){

    return new Promise((resolve,reject)=>{
        connection.query(' select * from question ', (err,que_result)=>{

            if(err){
                reject(err)
            }
            resolve(que_result);
        })
    })
}


async function getAnswers(connection,ids){

    return new Promise((resolve,reject)=>{
        connection.query('select * from answers where fk_que in (?)',[ids] ,(err,result)=>{

            if(err){
                reject(err)
            }
            resolve(result);
        })
    })
}


async function deleteQuestion(connection,id){

    return new Promise((resolve,reject)=>{
        connection.query('delete from question where id = ?',id,(err,result)=>{

            if(err){
                reject(err)
            }
            resolve(result);
        })
    })
}


module.exports={
    getQuestions:getQuestions,
    getAnswers:getAnswers,
    deleteQuestion:deleteQuestion
}