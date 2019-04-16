require('@babel/register');

const subtask = require('./subtask').default;

exports.default = (cb)=>{
  console.log("loaded index")
  subtask()
  cb()
}