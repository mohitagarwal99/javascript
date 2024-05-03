//For in loop
//it returns keys
const myObj = {
    js : 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift'
}

for (const key in myObj) {
    // console.log(myObj[key])
}

const programming = ['js', 'rb', 'py']
for (const key in programming) {
    // console.log(programming[key])
}

const map = new Map() //
map.set('IN', "India")
map.set('USA', 'United States of America')
map.set('IN', "India")

for (const key in map) {
    console.log(key) // not iterable with forin
}
