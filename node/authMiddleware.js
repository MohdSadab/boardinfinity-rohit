
//middleware is a function that takes req,res and next as an argument 
const authMiddleware=(req,res,next)=>{

    // for calling the next middleware
    if(req.headers['authorization']==='sadab'){
        req.user='sadab'
        next()
    }else{
        return res.status(401).json('Not AUthorized')
    }
        
}

module.exports= authMiddleware