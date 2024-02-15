/**
 * var :
 * 1. it's used to define a variable
 * 2. it has function scope but no block scope 
 * 3. it is hoisted 
 */

// var
function x (){
  var i = 34
  console.log(i)
}

x()
console.log(i)




/**
 * let
 * 
 * 1. no hosting 
 * 2. it also has block scope
 */

//let
{
  let i = 34
  console.log(i)
}
console.log(i)//it not gonna print 



/**
 * const :
 * 
 * 1. scope is same as let 
 * 2. const are final variable it not gonna change it value 
 * after assigned.
 */

const city = "my"

city = " koo"