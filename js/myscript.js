// KM NUMBER
const kmNumber = parseInt( prompt('inserisci quanti km devi percorrere') );
console.log (kmNumber);

// USER AGE
const userAge = parseInt( prompt('inserisci la tua età') );
console.log (userAge);

// CALCULATION TICKET PRICE
const ticketPrice = ('0.21');
let ticketFinalPrice = (kmNumber * ticketPrice);

// TICKET PRICE DECIMALS
let ticketpriceDecimals = ticketFinalPrice.toFixed(2);
console.log (ticketpriceDecimals, '€');

// CALCULATION DISCOUNT
if(userAge >= 65) {

    //DISCOUNT BIG VALUE
    const discountBig = (ticketFinalPrice * 40) / 100;
    let discountBigDecimals = ( discountBig.toFixed(2) );
    console.log (discountBigDecimals, '€');

    //DISCOUNT BIG TICKET PRICE
    const priceDiscountBig = (ticketFinalPrice - discountBig);
    let priceDiscountBigDecimals = ( priceDiscountBig.toFixed(2) );
    console.log (priceDiscountBigDecimals, '€');

} else if(userAge <= 18) {

    //DISCOUNT SMALL VALUE
    const discountSmall = (ticketFinalPrice * 20) / 100;
    let discountSmallDecimals = ( discountSmall.toFixed(2) );
    console.log (discountSmallDecimals, '€');

    //DISCOUNT SMALL PRICE
    const priceDiscountSmall = (ticketFinalPrice - discountSmall);
    let priceDiscountSmallDecimals = ( priceDiscountSmall.toFixed(2) )
    console.log (priceDiscountSmallDecimals, '€');

} else {

    let ticketpriceDecimals = ticketFinalPrice.toFixed(2);
    console.log (ticketpriceDecimals, '€');
    
}