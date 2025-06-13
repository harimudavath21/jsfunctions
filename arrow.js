// Arrow function
let sayBye = () => {
    console.log("Bye")
    console.log()
} 
sayBye()

// how to convert simple to arrow function
// 1.Remove function keyword and add let
// 2. add = sign after function name
// 3. add => sign after ()

// my name is hari learning in global

let fname =  "hari" 
let age = 21

let sayName = () => {
    console.log(`my name is ${fname} age is ${age}` )
}
sayName

sayHi()

let sayHi = () => {
    console.log("hello")
}
// simple functions support hoisting
// arrow functions doesn't support hoisting