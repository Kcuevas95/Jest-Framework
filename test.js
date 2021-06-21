const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});





test('One dollar should be 110.24 in yen', function(){

  const { fromDollarToYen } = require('./app.js')

  const yen = fromDollarToYen(3.5)

  const expected = 3.5 * 110.24

  expect(fromDollarToYen(3.5)).toBe(385.84);



})


test("One euro should be 1.19 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.19 dollars, then 3.5 euros should be (3.5 * 1.19)
    const expected = 3.5 * 1.19; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.165); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.19)
})





test('One yen should be 0.0066 in pound', function(){

  const { fromYenToPound } = require('./app.js')

  const pound = fromYenToPound(3.5)

  const expected = 3.5 * 0.0066;

  expect(fromYenToPound(3.5)).toBe(0.0231);



})


