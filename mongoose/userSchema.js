const mongoose = require("mongoose");
const {Schema} =mongoose

const userSchema = new Schema({
    name:String,
    email:String
})


userSchema.methods.getEmail=function(){

    return this.email
}

userSchema.statics.sayHello=function(){

    console.log("Hello")
}

userSchema.query.findByName= function(name){
    return this.where("name", /^sadab/i)
}

module.exports = mongoose.model('Users', userSchema);