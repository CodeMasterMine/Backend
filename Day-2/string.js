/**
 * 
 * String
 * 
 * string is a sequence of characters, typically used to represent text
 * string is immutable 
 */


// let name = 'vishal'

let city = " somewhere in the world"



// // type of 
 console.log(typeof city )


//  //index of string 
 console.log(name[3])

// // length of the string
console.log(name.length)

// //concat method in string
let full = name.concat(city)
console.log(full)


// // uppercase 
console.log(full.toUppercase())

// //Character at any index 
console.log(name.charAt(3))

//slicing
console.log(full)
console.log(full.slice(2))
console.log(full.slice(2,5))//[start from a , -b ]
console.log(full.slice(-5))
console.log(full.slice(-5,-1))


//indexOf
console.log(full.indexOf('e'))


//trim 
let word = 'make'
console.log(word.trim())

//split
let name = 'vishal yadav'
console.log(name.split(" "))