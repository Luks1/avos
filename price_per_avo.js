module.exports = function(newArray){
  var prices = [];
       //loop for my arrays
 newArray.forEach(function(newArray){
      //variable showing price
var price = newArray[1];
     //variable showing quantity
var quantity = newArray[0];
    //variable to calculate price for each avo
var pricePerEachAvo = price / quantity;


   //console.log out the prices for each avo with ony two decimals
 prices.push(pricePerEachAvo.toFixed(2));


});
console.log(prices);
return prices;
}
