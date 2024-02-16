/**
 * for each method
 */


players = ['sachin','dhoni','rohit']

players.forEach((players) => console.log(players))
  


// map
arr = [1,2,3,4,5,6]

sq_arr = arr.map(num => num**2)
console.log(sq_arr)

//Filter
arr1 = [1,2,3,4,6,9,7]
let even = arr1.filter((num) => num%2==0)
console.log(even)

//reduce 
arr2 = [2,3,4,5,6].reduce((curr,next) => curr+next)
console.log(arr2)