// console.log(a)// Intially its undefined => Hoisted with value undefined


printName('JS') // This function will executed
// var a = 'Stephen'

// function printName(name){
//     console.log(name)
// }

//
var printNameFC = function(name){
    console.log(name)
}

printNameFC('Stephen')