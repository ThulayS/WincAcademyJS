// Hey Kiddo

const checkAge = function (number) {
    if (number >= 18) {
        return true;
    }
    return "false";

}
const myAge = [6]
// console.log(checkAge(myAge));

const ageGreeting = function (number) {
    if (checkAge >= true) {
        return "Hello there";
    }
    return "Hey Kiddo";

}

// console.log(ageGreeting(myAge));

// VAT calculations
// VAT exercise 1

// const vatCalculation = function (price) {
//     const vat = price * vatPercentage
//     return vat;
// };

// const pricePlusVat = function (price) {
//     const vatN = vatCalculation(price)
//     return(vatN + price);
// };

// const vatPercentage = 0.21;
// const priceBeforeVat = 100;

// // console.log(vatCalculation(priceBeforeVat))
// console.log(pricePlusVat(priceBeforeVat));


// VAT exercise 2

const vatCalculation = function (price) {
    const vat = price * vatPercentage
    return vat;
};

const pricePlusVat = function (price) {
    const vatN = vatCalculation(price)
    return ("Your VAT is" + vatN);
};



const vatPercentage = 0.21;
const priceBeforeVat = 100;

// console.log(vatCalculation(priceBeforeVat))
console.log(pricePlusVat(priceBeforeVat));