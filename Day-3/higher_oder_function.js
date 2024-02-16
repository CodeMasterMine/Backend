/**
 * 
 * first order function
 */




/** higher oder function 
 * you pass a function inside of fuction parameter 
 * and you return also function
 */


function operation (operater, a, b ){
  return operater(a,b)
}

function add (a,b){
  return a + b
}

let result = operation(add , 34 , 3)
console.log(result)


// another way of making hod

function getgreet(){
  return function user (){
    console.log("hello")
  }
}

let greet = getgreet()

greet()