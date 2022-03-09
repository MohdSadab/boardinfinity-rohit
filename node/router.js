const express = require('express');
const  authMiddleware = require('./authMiddleware');

const router = express.Router();

// files global middleware
// router.use(authMiddleware)
router.get("/",(req,res)=>{

    console.log("users",req.query)
    return res.json({"user":"Mohd Sadab"})
})

router.get("/:id",[authMiddleware],(req,res)=>{

    console.log("users",req.params)
    return res.json({"user":"Mohd Sadab dhdhdhd"})
})


module.exports = router


// middlelware 