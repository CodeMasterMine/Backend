/**
 * 
 * fn without parameter 
 */

var hello = () => console.log('hello')



/**
 * fn with parameter 
 */

var hello =(a,b) => a+b

console.log(23,45)


/**
 * fn with parameters , multiple lines of fn body
 */

var x = (a , b) => {
  console.log('hello')
  return a*b
}

console.log(x(23,56))




/**
 * IIFE 
 * 
 *  * Immediatly invoce function expression
 */

(function (){
  console.log("hello")
}) ()