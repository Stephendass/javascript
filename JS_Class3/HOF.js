let radiusArr = [2, 3, 4, 5, 6]

console.log(radiusArr)
function calculate(arr, cb) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(cb(arr[i]));
    }
    return result;
} //this is a higher order function

function circleArea(radius) {
    return 3.14 * radius * radius;
}

function circleCircumference(radius) {
    return 2 * 3.14 * radius;
}

function circleDiameter(radius) {
    return 2 * radius;
}

// calculate the area for each radius

let Areas = calculate(radiusArr, circleArea);
let circumference = calculate(radiusArr, circleCircumference);
let diameter = calculate(radiusArr, circleDiameter);

console.log(Areas);
console.log(circumference);
console.log(diameter);