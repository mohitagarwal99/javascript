// FOr each loop

const coding = ["js", "ruby",  'cpp', 'java']
//high order function , callback function in paranthesis


// coding.forEach( function (item) { 
//     console.log(item)
// } )

// coding.forEach((item) => {
//     console.log(item);
// })


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)


//Callback function has access to items, index, arr

// coding.forEach((item, index, arr) =>{
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        fileName: 'js'
    },
    {
        languageName: "java",
        fileName: 'java'
    },
    {
        languageName: "python",
        fileName: 'py'
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
    console.log(item.fileName)
})