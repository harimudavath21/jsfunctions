//set timeout and time interval

//setTimeout
//executes a function once after a delayed given time in milliseconds

//1000 ==> 1 second
//5000 ==> 5 seconds

function sayGlobal(){
    console.log("Hello Global")
}
// It takes 2 parameters
// 1st function
//2nd time in milliseconds
//Runs only once
setTimeout(sayGlobal, 500)

let seconds = 2
setTimeout(sayGlobal, seconds * 1000)

//setInterval
//executes a function repeatedly at given time in milliseconds and to stop is ...use ctrl+c

setInterval(sayGlobal, 500)
//It will execute the function multiple times unless and until we stopped it