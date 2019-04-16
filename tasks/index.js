require("@babel/register")

//var subtask = require('./subtask.js');

exports.default = (cb)=>{
  console.log("loaded index")
  //subtask()
  cb()
}