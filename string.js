module.exports = function(avos){
        //creating new array
var newArray = [];
var array = avos.split(",");



  // forEach for my array
  array.forEach(function(avos){
        //pushing arrays to my newArray and also same time removing "for"and "R"
  newArray.push(avos.split("for R"));

});
console.log(newArray);
return newArray;
}
