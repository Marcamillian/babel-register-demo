# Aim

I was looking for a way to use webpack with gulp and was following this example - https://css-tricks.com/combine-webpack-gulp-4/

This didn't seem to be working correctly (was failing at first import statement) so this is an attempt to isolate the problem 
and get gulp accepting import statements.

## Sucesses
The branch `babel-register-docs` is using an import statement using the @babel/register hook which seems to be the updated 
version of the babel-register call used in the npm script in the original example


## Potential Help

- [x] https://css-tricks.com/combine-webpack-gulp-4/
  - Seems to be out of date - get an error that indicates that babel-register hook isn't working
    e.g. errors on the first import statemet it comes across
- [x] https://catalin.me/using-gulp-4-with-es6-babel/
    - didn't seem to use babel anywhere
    - errors on the first import statement