function printName(name){
    // console.log(name)
}

printName('Stephen')


//Eg1
function printFname(firstName, cb){
    console.log(firstName)
    cb('Stephendass')
}

function printLname(lastName){
    console.log(lastName)
}

printFname('JS', printLname)
// printLname('Stephendass')
//callback function


//Eg2
function printFirstName(firstName, cb1, cb2){
    console.log(firstName)
    cb1('JS')
    cb2('35')
}

function printLastName(lastname){
    console.log(lastname)
}

function printAge(age){
    console.log(age)
}
printFirstName('Stephen', printLastName, printAge)

function printName(firstName, lastName, age){
    console.log(firstName)
    lastName('Theo');
    age('3');
}
function printLastName(lastName){
    console.log(lastName)
}
function printAge(age){
    console.log(age)
}
printName(Jhovin, fn, printAge);