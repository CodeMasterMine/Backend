/**
 * array : 
 * way of storeing data
 */

arr = [1,2,3,4]
console.log(arr[0])




//arrays are mutabel 
arr[1] =200
console.log(arr)





//insert item in arrays on end
arr.push(11)
console.log(arr)




//insert in starting of arrays
arr.unshift(90)





//removeing element in end
console.log(arr.pop())
console.log(arr)





//removing element from starting
console.log(arr.shift())
console.log(arr)






//adding array with anuthor array
let arr1 = [1,2,3,4]
let arr2 = [6,7,8]

let r = arr1.concat(arr2)
console.log(r)




//size of arrays
console.log(arr1.length)




//convert arrays in string 
char_arr = ['v','i','s','h','a','l']
console.log(char_arr.join(""))




//slicing the array 

console.log(char_arr.slice(2))
console.log(char_arr.slice(2,6))
console.log(char_arr.slice(-2,-5))





//splicing
let num = [1,2,3,4,5,6]
let rem = num.splice(2,2)
console.log(num)



//reverse a givien array
let k = [1,2,6,7,8,]
k.reverse()
console.log(k)




//indexOf
let k1 = [1,23,4,5]
console.log(k1.indexOf(23))




//sorting method

let arr = [1,4,5,62,2]

arr.sort()

console.log(arr)//it's not a sort


//sorting with arrow
arr.sort((a,b) => a-b)



