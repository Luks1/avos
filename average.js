
module.exports = function(prices){
var sum = 0;
// looping through my array
for (var i = 0; i<prices.length; i++) {
  //accesing to my strings by that "Number"
  sum += Number(prices[i]);
}
//finding out my avarage
 avg = sum / prices.length;
//printing out my avarage
console.log(avg);
return avg;
}
