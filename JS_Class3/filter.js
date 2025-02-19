let NumbersArr = [2, 4, 7, 8, 10, 11, 13, 14]

function getEven(arr) {
    let evenNum = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evenNum.push(arr[i])
        }
    }

    return evenNum;
}

let result = getEven(NumbersArr)

console.log(result);

//filter

let eveArr = NumbersArr.filter(function (num) {
    return num % 2 == 0
})
console.log(eveArr);

//Example1

const transactions = [1000, 3000, 4000, 2000, -989, 3800, -4500]

let ans = transactions.filter(function (num1) {
    return num1 > 0
})

console.log(ans);