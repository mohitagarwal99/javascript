const tinderUser = {}
// const tinderUser = new Object()

tinderUser.id = '123abc'
tinderUser.name = 'moh'
tinderUser.isOn = false

// console.log(tinderUser)

const regularUser = {
    email : 'a@gmail.com',
    fullname:{
        username : {

        }
    }
}


const obj1 = {
    1: 'a',
    2: 'b',
}

const obj2 = {
    3: 'c',
    4: 'd',
}

// obj3= obj1 + obj2
// console.log(obj3)

// obj3 = {obj1, obj2}
// console.log(obj3)

// const obj4 = Object.assign(obj1, obj2) // first one is always target and rest are source it also return nw object 


const obj4 = Object.assign({}, obj1, obj2) // {} this one is target and rest are source
// obj4 = {...obj1, obj2}
// console.log(obj4)
// console.log(obj3)



//Iterating over keys of an object

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isOn'))


//************Object Destructuring *******************


const course = {
    coursename : 'js',
    price: '99',
    courseInstructor: 'hitesh'
}

// course.courseInstructor

const {courseInstructor : inst} = course
// console.log(courseInstructor)
console.log(inst)


// const navbar = ({company}) => {

// }
// navbar(company = "hitesh")