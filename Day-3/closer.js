/**
 * closure
 */
function outerfn (){
  let outer = "i am inside "
  function innerf(){
    console.log(outer)
  }

  return innerf
}

let fn = outerfn()
fn()





//
function customerCounter(){
  let count = 0 
  return function (){
    count++
    console.log("New customer number ", count )
  }
}


let num = customerCounter()


for (let i = 0; i <= 23 ; i++){
  num()
}