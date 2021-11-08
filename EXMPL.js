let bread = "Oven Joy Bread";
let breadAmount = 2.0;
let breadPrice = 0.99;
let breadTotalPrice = breadAmount * breadPrice;
console.log(bread + '              ' + breadTotalPrice);
console.log(   breadPrice  + ' at ' +  (breadAmount).toFixed(1));

let milk = "Lucerne milk";
let milkAmount = 1.0;
let milkPrice = 2.29;
let milkTotalPrice = milkAmount * milkPrice;
console.log(milk + '                ' +  milkTotalPrice);
console.log(milkPrice  + ' at ' +  (milkAmount).toFixed(1));

let beans = "Hormel Chili with Beans";
let beansAmount = 3.0;
let beansPrice = 1.29;
let beansTotalPrice = beansAmount * beansPrice;
console.log(beans + '     ' + beansTotalPrice);
console.log(   beansPrice  + ' at ' +  (beansAmount).toFixed(1));

let beer = "12-pack Blue Moon";
let beerAmount = 1.0;
let beerPrice = 12.99;
let beerTotalPrice = beerAmount * beerPrice;
console.log(beer + '          ' + beerTotalPrice);
console.log(   beerPrice  + ' at ' +  (beerAmount).toFixed(1));

let navel = "Organic Navel Oranges";
let navelAmount = 2.5;
let navelPrice = 1.49;
let navelTotalPrice = (navelAmount * navelPrice);
console.log(navel + '       ' + navelTotalPrice.toFixed(2));
console.log(   navelPrice  + ' at ' +  (navelAmount).toFixed(1));

let apple = "Granny Smith apple";
let appleAmount = 1.09;
let applePrice = 1.6;
let appleTotalPrice = appleAmount * applePrice;
console.log(apple + '          ' + appleTotalPrice.toFixed(2));
console.log(   applePrice  + ' at ' +  (appleAmount).toFixed(1));

let yogurt = "Tillamook Greek Yogurt";
let yogurtAmount = 6.0;
let yogurtPrice = 1.0;
let yogurtTotalPrice = (yogurtAmount * yogurtPrice);
console.log(yogurt + '      ' + yogurtTotalPrice.toFixed(2));
console.log(   yogurtPrice.toFixed(2)  + ' at ' +  (yogurtAmount).toFixed(1));
console.log('___________________________________________________________________');
let sum = breadTotalPrice + milkTotalPrice + beansTotalPrice +
    beerTotalPrice + navelTotalPrice + appleTotalPrice + yogurtTotalPrice;
console.log("SUBTOTAL: " + "                  " + (sum).toFixed(2));
let saving = (sum / 100 * 5);
let num = sum - saving;
console.log("CLUBCARD Saving 5%" + "          " + (sum / 100 * 5).toFixed(2));
let tax = num / 100 * 8.75;
let total = num + tax;
console.log('TAX 8.75%' + "                   " + (tax).toFixed(2));
console.log('TOTAL:' + "                      " + (total).toFixed(2));

console.log('--------------------------------------------------------------------');

let extra = total - 30;

if(total >= 30){
    console.log('You do not have enough money on your card, \n you need extra' + '  ' + `${extra.toFixed(2)}`);
}else{
    console.log('Have a nice day!');
}