var avos = " 1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
        //creating new array
var newArray = [];
var array = avos.split(",");
        console.log(array);


  // forEach for my array
  array.forEach(function(avos){
        //pushing arrays to my newArray and also same time removing "for"and "R"
  newArray.push(avos.split("for R"));
});
        //console.log for my arrays
  console.log(newArray);
  //creating an empty array for prices
  var prices = [];
        //loop for my arrays
  newArray.forEach(function(item){
       //variable showing price
var price = item[1];
      //variable showing quantity
var quantity = item[0];
     //variable to calculate price for each avo
var pricePerEachAvo = price / quantity;


    //console.log out the prices for each avo with ony two decimals
  prices.push(pricePerEachAvo.toFixed(2));
 //console.log(pricePerEachAvo.toFixed(2));

});

//syntax for cheapest price
console.log(Math.min.apply(null,prices));
//syntax for expensive prise
console.log(Math.max.apply(null,prices));
//calling all prices
console.log(prices);


var sum = 0;
// looping through my array
for (var i = 0; i<prices.length; i++) {
  //accesing to my strings by that "Number"
  sum += Number(prices[i])
}
//finding out my avarage
 avg = sum / prices.length;
//printing out my avarage
console.log(avg);





















// var items = [];
// items.push((avos)
// //creating a variable to remove that "for" and "R"
// var items = avos
//
// .replace("for R",  ":")
// .replace("for R",  ":")
// .replace("for R",  ":")
// .replace("for R",  ":")
// .replace("for R",  ":")
//
// console.log(items);
