/**
 * Scope's
 * 
 *
 * Global scope 
 * Function scope
 * Block scope
 * 
 */


// What is a global scope

var name = 'vis'

console.log(name)


function user (){
  console.log(name)
}

user()





// Local scope

function func(){
  var i = 9
  console.log(i)
}


func()




/**
 * BLock scope 
 */

{
  let x = 89
  console.log(x)
}

console.log(x)