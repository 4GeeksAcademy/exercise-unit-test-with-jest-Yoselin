const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a yen
    let valueInYen = valueInDollar * 106.5;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a yen
    let valueInPound = valueInYen * 0.0063;
    // retornamos el valor
    return valueInPound;
}


const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
