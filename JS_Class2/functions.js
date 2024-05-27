// add two numbers

//function creation(traditional or normal way)
function addTwoNum(a, b){
    let sum = a + b
    console.log(sum)
}

//how to call or invoke a function
addTwoNum(1,2)
addTwoNum('JS' , 'Stephendass')

// function with String

function printName(name){ 
    console.log(name)
}
printName('Jaima')

//Functions as first class Citizens

function sayHi(){
    console.log('Hi.. Hello..')
}
 sayHi() //basic function

 //Functions as Expressions
 let sayHiF = function(){
    console.log('Stephendass')
 } //first class function
 console.log(sayHiF)
 sayHiF()

 let multiply = function(m , n){
    console.log(m * n)
 }
 multiply(4,2)

 //Arrow Functions

 let subtract = (a,b)=>{
    console.log(a - b)
 }
subtract(5, 10)