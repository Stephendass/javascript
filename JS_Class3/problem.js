let arr = [2, 3, 4, 5, 6] //radius of circles

//calculate the area for each radius

function calArea(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(3.14 * arr[i] * arr[i])
    }

    return result;

}

let finalAreaArray = calArea(arr);
console.log(finalAreaArray);

//calculate thr diameter of the circle
let samArr = [5, 6, 7, 8]

function calDia(arr) {
    let result1 = []
    for (let i = 0; i < arr.length; i++) {
        result1.push(2 * arr[i]);
    }

    return result1;
}

let diameters = calDia(samArr)
console.log(diameters)

//circumference of the circle
let samArr1 = [2, 4, 6, 8]

function calDcirOfCircle(arr) {
    let result2 = []
    for (let i = 0; i < arr.length; i++) {
        result2.push(2 * 3.14 * arr[i]);
    }

    return result2;
}

let circumference = calDcirOfCircle(samArr1)
console.log(circumference)

//Reduce DRY(Dont Repeat Yourself)

