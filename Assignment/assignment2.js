//Count the Number of Vowels
/*
Write a function that takes in a string and returns the count of vowels in that string.
Consider the vowels to be a, e, i, o, u (both uppercase and lowercase).

function main(str) {
    var vowelsCount = 0;
    var string = str.toString();
    for (var i = 0; i <= string.length-1; i++) {
        if (string.charAt(i) == 'A' || string.charAt(i) == 'E' || string.charAt(i) == 'I' || string.charAt(i) == 'O' || string.charAt(i) == 'U' ||
            string.charAt(i) == 'a' || string.charAt(i) == 'e' || string.charAt(i) == 'i' || string.charAt(i) == 'o' || string.charAt(i) == 'u') { vowelsCount += 1; }
    }
    return vowelsCount;
}

console.log(main("aeiou"));

*/
/*
Write a function that takes in an array of numbers and returns the maximum value in that array.

function findMaxValue(arr) {
    var maxNum = arr[0];
    for(let i = 1; i <arr.length; i++){
        if(arr[i]> maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;
}
console.log(findMaxValue([1,2, 3, 4, 5]))

*/
/*
Write a function that checks if a given string is a palindrome.
A palindrome is a word, phrase, number, or other sequences of characters which reads the same backward as forward (ignoring spaces, punctuation, and capitalization).
*/

function isPalindrome(str) {
        var original = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

        //take original sentence and reverse
        var reverse = original.split('').reverse().join('');

        if(original ==reverse){
            return true;
        } else {
            return false;
        }
}
console.log(isPalindrome("Stephen"))