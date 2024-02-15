/**
 * Function is a block of code that contain a logic 
 * to solve a problem and we use any as many time we face the same problem 
 */

function user (){
  console.log("hello user ")
}

user()







/**
 * perameter 
 */

function sum(a,b = 23){
  return a+b
}

console.log(sum(23,88))



/**
 * 
 * arguments object
 */

function classi(){
  console.log(arguments)
}

classi(1,2,3,4,5,6)





/**
 * 
 * using function to print total of z and y in loop
 * it's just for experiment 
 */

function hello_student( ){
  var z = 1
  var y = 34
  var total = z + y
  
  return total

}

let x = hello_student()

for (var i = x ; i < 89 ; i++) {
  console.log(" hello " + i + " world ")
  
}