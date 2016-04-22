var string = require('../string');
var assert = require('assert');


var stri = " 1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
//var newStr = [ [ ' 1 ', '3' ],[ ' 2 ', '7' ],[ ' 3 ', '10' ],[ ' 5 ', '14.50' ] ]

describe('A string', function(){
  it('it should return string into an array', function(){
    assert.deepEqual(string(stri),[
  [ ' 1 ', '3' ],
  [ ' 2 ', '7' ],
  [ ' 3 ', '10' ],
  [ ' 5 ', '14.50' ] ]);


  })
});
