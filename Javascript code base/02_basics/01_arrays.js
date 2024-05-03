const arr = [1, 2 ,3, 4, "mohit", true]
console.log(arr)

//Copy in array is a shallow copy of object
// -> copy represents same reference point

const arr2 = new Array(1, 2 , 3 ,4)

//Array Methods

arr.push(6)
arr.push(6)
arr.pop()
console.log(arr)


arr.unshift(9) //inserting value to 1 shift all elements by 1 to right

const marvel =["thor", 'spidey']
const marvel2 = ['ironman', 'flash']

const allMarvel = [...marvel, ...marvel2, ...arr]
console.log(allMarvel)