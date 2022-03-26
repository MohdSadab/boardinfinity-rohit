const mongoose = require("mongoose");
const {Schema} =mongoose

const postSchema = new Schema({
    title:String,
    body:String,
    userId:Number,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    hobbies: [String],
})


module.exports = mongoose.model('Posts', postSchema);