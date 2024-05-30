let numbersArr = [1, 2, 3, 4 ,5]

//calculate the sum of all the array element
//basic
function sumAll(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}       

console.log(sumAll(numbersArr))

let addResult = numbersArr.reduce(function(acc, num){
    acc = acc + num;
    return acc
}, 0)


let prodResult = numbersArr.reduce(function(acc, num){
    acc = acc * num;
    return acc
}, 1)

console.log(addResult)
console.log(prodResult)