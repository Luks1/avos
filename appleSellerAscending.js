module.exports = function(frt){

  var empty = [];

  for(key in frt){

    if(frt[key].hasOwnProperty('apples')){

      empty.push({

        shop:key,

        price:frt[key].apples
      })
    }

  }
    //console.log(empty);

var myApple = empty.slice();
    myApple.sort(function(a,b) {
     return a.price - b.price;
 })
 console.log(myApple);
 return myApple;

};
