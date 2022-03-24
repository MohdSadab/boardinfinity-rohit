const mongoose = require("mongoose");
const {Schema} =mongoose

const blogSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    body:String,
    comments:[{body:String,date:Date}],
    date:{
        type:Date,
        default:Date.now
    },
    hidden: Boolean,
    meta:{
        votes:Number,
        favs:Number
    }
})


module.exports = mongoose.model('Blog', blogSchema);