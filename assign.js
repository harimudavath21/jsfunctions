//redeclare vs reassign
//                              var      let      const
// reassign                     ✅       ✅       ❌
//Redeclare                     ✅`      ❌       ❌
 var fullName = "hari"
 fullName = "Hari" //update a variable(re assign)
 console.log(fullName)

 var a = 10;
 var a = 20; //redeclare
 console.log(a)
 a = 17; //reassign
 console.log(a)

 let s1 = 10;
//  let s1 = 20; //redeclare
//  console.log(s1)
s1 = 20 // reassign
console.log(s1)

// const m1 = 25;
// // const m1 = 25; //redeclare
// // console.log(m1)
// m1 = 65; //reassign
// console.log(m1)