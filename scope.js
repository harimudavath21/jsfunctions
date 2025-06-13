// // there are 3 types if scoping in javascript
// // 1. Block scope
// // 2. Function scope
// // 3. Global scope

// // Block scope block means only in braces ex:{}
// //                            var              let                   const
                            
// //Inside of block              ✅              ✅                  ✅
// // outside of bloc              ✅              ❌                 ❌


// //Inside of block in var
// {
//     var x = 10;
//     var y = 20;
//     console.log(x)
//     console.log(y)
// }
// // inside of block for let
// {
// let a = 45;
// let b = 49;
// console.log(1a)
// console.log(1b)
// }
// // inside of block for const
// {
//     const f = 18;
//     const k = 454;
//     console.log(f)
//     console.log(k)
// }

// // var outside of block
// {
//     var h = 21;
//     var c = 45;
// }
// console.log(h)
// console.log(c)
// // let outside of block
// // {
// //     let  m1 = 45;
// //     let m2 = 21;
// // }
// // console.log(m1)
// // console.log(m2) // we can't access outside of the block
// // {
// //     const m1 = 45;
// //     const m2 = 21;
// // }
// // console.log(m1)
// // console.log(m2)

// //function scope
// //                                        var            let                const
// //inside of the function                  ✅             ✅                 ✅
// //outside of the function                  ❌            ❌               ❌
// //inside of function
// // function t1()  {
// //     var a = 21;
// //     var b = 17;
    
// // }
// // console.log(a,b)
// // t1()
// function s2(){
// let a1 = 42;
// let a2 = 654;
// console.log(a1,a2)
// }
// s2
// function s2(){
// const b1 = 6546;
// const b2 = 64;
// console.log(b1,b2)
// }
// s2()

// //outside of the function
// // function s1()  {
// //     var a = 21;
// //     var b = 17;
// //     console.log(a,b)
// // }
// s1()
// function s2(){
// let a1 = 42;
// let a2 = 654;
// }
// console.log(a1,a2)
// s2
// function s2(){
// const b1 = 6546;
// const b2 = 64;
// console.log(b1,b2)
// }
// s2()


// Global scope                               var            let              const

var a = 10;
let b = 20;
const c = 30;
console.log(a,b,c)
{

console.log(a,b,c)
}

function sayCheck(){
    console.log(a,b,c)
}
sayCheck()