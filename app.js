// we declare the function with the exact name "fromEuroToDollar"
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };







// one euro is:
let oneEuroIs = {
    "JPY": 110.24, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.0066, // british pound
}


const fromDollarToYen = function(valueInDollar){
    let valueinYen = valueInDollar * 110.24
    return valueinYen
}



const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.19;
    //return the dollar value
    return valueInDollar;
}



const fromYenToPound = function(valueInYen){

    let valueInPound= valueInYen * 0.0066;

    return valueInPound
}








module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}