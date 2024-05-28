function printName(name){
    // console.log(name)
}

printName('Stephen')

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