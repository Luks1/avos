module.exports = function(shops){
  var small = 1000;
    var cheapFruit = "";

    for(var key in shops){

      //console.log(shops[key]);

    for(var key1 in shops[key]){

      //console.log(key1);

      var fruits = shops[key];

      var fruitsPrices = fruits[key1];

      if(fruitsPrices <= small){

        small = fruitsPrices;

        cheapestFruit = key1;
      }
    }

    }
    console.log(cheapestFruit);
    return cheapestFruit;
}
