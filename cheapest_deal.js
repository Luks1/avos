module.exports = function(lines){

    var cheaper = 1000;

    lines.forEach(function(line){

        if(line < cheaper ){

          cheaper = line;
        }
    })
    console.log(cheaper);
    
    return cheaper;
  }
