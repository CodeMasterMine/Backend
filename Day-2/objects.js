/** 
 * object's
 * 
 */

const user = {
  name : 'vishal',
  age : 12
}



//accessing the data 
console.log(user.name)
console.log(user['name'])


//adding the data in object
user.city = "fall"
user['city'] = 'fall'


//deleteing the data 
delete user.city
console.log(user)

//
let manga = {
  manga1 : 'naruto',
  manga2 : 'chainsaw man ',
  mangal: {
    first : 'file'
  }
}


for ( let key in manga ){
  console.log(key, '=>', manga[key])
}


//cloning 
const new_manga = Object.assign({}, manga)