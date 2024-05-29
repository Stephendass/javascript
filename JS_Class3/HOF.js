let radiusArr = [2, 3, 4, 5, 6]

console.log(radiusArr)
function calculate(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i]));
    }
    return result;
}

