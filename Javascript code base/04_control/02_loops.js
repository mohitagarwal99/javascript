// for of

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)
// }
// const greetings = "hello world"
// for (const greet of greetings) {
//     console.log(greet)
// }


//***Maps */
// values in key-value pair 
// contains unique keys
//Maintains order
const map = new Map() //
map.set('IN', "India")
map.set('USA', 'United States of America')
map.set('IN', "India")

console.log(map)

/** Loop on map
 * 
 */
// for (const [key, value] of map) {
//     console.log(key, ' ', value) //destructuring key and value
// }


// const obj = {
//     'game': 'nfs',
//     'game2': "Spiderman"
// }

// for (const [key, value] of obj) {
//     console.log(key, ' ', value) //destructuring key and value
// } // Error objects are not iterable but maps does with for of