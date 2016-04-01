var avos = " 1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
        //creating new array
var newArray = [];
var array = avos.split(",");
        //console.log(array);

  array.forEach(function(avos){
        //pushing arrays to my newArray and also same time removing "for"and "R"
  newArray.push(avos.split("for R"));
});
        //console.log for my arrays
  console.log(newArray);
        //loop for my arrays
  newArray.forEach(function(item){
       //variable showing price
var price = item[1];
      //variable showing quantity
var quantity = item[0];
     //variable to calculate price for each avo
var pricePerEachAvo = price / quantity;

    //console.log out the prices for each avo
  console.log(pricePerEachAvo);
});



























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
