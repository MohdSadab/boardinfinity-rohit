const mongoose = require("mongoose");
const {Schema} =mongoose

const blogSchema = new Schema({
    title:{
        type:String,
    }
})


module.exports = mongoose.model('Blog', blogSchema);