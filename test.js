const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});   

test("One dollars should be 106.5 to yen", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(1)).toBe(106.5);
});

test("One yen should be 0.0063 british ", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(1)).toBe(0.0063);
});

