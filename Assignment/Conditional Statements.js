
function minOrMaj(age){
    if(age >= 18){
        console.log('You are Major')
    } else {
        console.log('You are Minor')
    }
}
minOrMaj(18)

/* 
Problem:
Write an if-else statement to check if a user is older than 18.
If true, log "You are an adult." otherwise log "You are a minor."

main function will be called with an argument with the value of age.
*/


const num =[1, 2, 3, 4, 5];

let res = []
for(let i = 0; i <num.length; i++){
    res.push(num[i] * 2)
}
console.log(res)