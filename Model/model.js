const { default: mongoose } = require("mongoose");
const { isInt16Array } = require("util/types");

let schema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // date: {type:date,default:Date.now},
    name: { type: String, required: true },
    repeat: Boolean
})

let User = new mongoose.model("User",schema)

MongoClient.connect(URI, function(err, db) {  
    if (err) throw err;  
    db.collection("products").find().toArray(function(err, result) {  
    if (err) throw err;  
    console.log(result);  
    db.close();  
    });  
    });  
    
console.log(Products.find())

module.exports = readData