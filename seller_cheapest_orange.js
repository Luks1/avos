module.exports = function(obj){

  var empty = [];

  for(key in obj){

    if(obj[key].hasOwnProperty('oranges')){

      empty.push({

        shop:key,

        price:obj[key].oranges
      })
    }
  }
  //console.log(empty);



var total = 1000;
var shop = "";

empty.forEach(function(line){

  if(line.price < total){

    total=line.price;

    shop=line.shop;
  }

})
console.log(shop);
return shop;

};






















//   var empty = [];
//   var min = 1000;
//   var  cheapestOrangeSeller ={};
//   for(key in obj){
//    console.log(key);
//     empty.push(obj[key]);
//   }
//   console.log(empty);
//   empty.forEach(function(shop){
//     console.log(shop);
//     if(shop.orange < min){
//       min = shop.orange;
//
//       cheapestOrangeSeller = {
//         name:obj[key],
//         price:min
//       }
//     }
//
//
//
//   })
//   //return cheapestOrangeSeller;
//   console.log(cheapestOrangeSeller);
// };
