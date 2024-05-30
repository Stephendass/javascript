let numArr = [2,3,4,5,6]
// get square of all the array element

// function calSquareArray(arr){
//     let sqArray = []
//     for(let i = 0; i < arr.length; i++){
//         sqArray.push(arr[i] * arr[i])
//     }

//     return sqArray
// }
// let result = calSquareArray(numArr)
// console.log(result)

//map method

function square(num) {
    return num * num
}
let resultMap = numArr.map(square)
console.log(resultMap)

// convert this from USD to INR

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const intToUsd = 80;

let conversions = transactions.map(function(amount){
    return amount*80;
})
console.log(conversions)