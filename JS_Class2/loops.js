//print the square for all the array members

let arr = [1, 2, 3, 4, 5]
console.log(arr.length) // calculate the length of the array

let sqrdArr =[] // Initially create empty array
for(let i = 0; i <  arr.length; i++){
    sqrdArr.push(arr[i] * arr[i])
}

console.log(sqrdArr)