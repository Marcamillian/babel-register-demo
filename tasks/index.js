require('@babel/register');

const subtask = require('./subtask');


exports.default = (cb)=>{
  console.log("loaded index")
  subtask()
  cb()
}