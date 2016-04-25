module.exports = function(files){
    var maximum = 0;

    files.forEach(function(file){

        if(file > maximum ){

          maximum = file;
        }
    })
    console.log(maximum);
    
    return maximum;
  }
