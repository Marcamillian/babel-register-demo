- [x] https://babeljs.io/docs/en/babel-register/
  - Doesn't seem to work

The idea seems to be that you import the @babel/register module and every require statement in that file is then processed through babel
In this case it doesn't seem to be working - still complains about the first import statement

It tries to define the babel stuff in package.json and not in a babel.rc file - could this be the problem?
