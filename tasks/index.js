require('@babel/register');

const subtask = require('./subtask').default;

const gulp = require('gulp')
const { scripts } = require('./webpack')
const { server } = require('./server')

exports.default = (cb)=>{
  console.log("loaded index")
  subtask()
  cb()
}

exports.build = gulp.series( scripts )
exports.dev = gulp.series( server )