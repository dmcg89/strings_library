// TODO:    - Help function that strips punctuation, include options to include numeric, standard punctuation
//          - Combine kabob and snake
// Challenge #1

function capitalize(str) {
    return (str.substring(0,1)).toUpperCase().concat(str.substring(1,))
}

console.log("capitalize('hello') ", capitalize('hello'));

//  Challenge #2
function allCaps(str) {
    return str.toUpperCase(str)
}

console.log("allCaps('hello') ", allCaps('hello'));

//  Challenge #3
function capitalizeWords(str) {
    return (str.split(" ")).map(capitalize).join(' ')
}

 console.log("capitalizeWords('test test test') ", capitalizeWords('test test test'));


//  Challenge #4

function removeExtraSpaces(str, joiner = ' ') {
    return (str.trim()).split(' ').map(word => word.trim()).filter(elem => elem != '').join(joiner)
}
console.log("removeExtraSpaces('   Test   test   test') ", removeExtraSpaces('   Test   test       test'));

// Challenge #5

function kabobCase(str) {
    return removeExtraSpaces((str.toLowerCase()).replace(/[^a-zA-Z ]/g, ""), '-')
}
//  console.log("kabobCase("Hello World!") ", kabobCase("Hello World!"));
 console.log("kabobCase('Hello World!') ", kabobCase("Hello World!"));

// Challenge #6

function snakeCase(str) {
    return removeExtraSpaces((str.toLowerCase()).replace(/[^a-zA-Z ]/g, ""), '_')
}

 console.log("snakeCase('what the heck') ", snakeCase('what the heck'));

 // Challenge #7
function camelCase(str) {
    var res = str.split(' ')
    for (var i=0; i < res.length; i++) {
        const remChars = res[i].substring(1,)
        if (i==0) {
            var firstChar = res[i].substring(0,1).toLowerCase()
        } else {
            var firstChar = res[i].substring(0,1).toUpperCase()
        }
        res[i] = firstChar.concat(remChars)
    }
    return res.join('')
}

 console.log("camelCase('camel case') ", camelCase('camel case'));

 // INTERVIEW Q - when to use mapping?