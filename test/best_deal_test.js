var string = require('../string');
var price_per_avo = require('../price_per_avo');
var cheapest_deal = require('../cheapest_deal');
var expensive_deal = require('../expensive_deal');
var average = require('../average');
var assert = require('assert');


var stri = " 1 for R3, 2 for R7, 3 for R10, 5 for R14.50";
var newStr = [ [ ' 1 ', '3' ],[ ' 2 ', '7' ],[ ' 3 ', '10' ],[ ' 5 ', '14.50' ] ]
var prices = ["3.00", "3.50", "3.33", "2.90"]


describe('A string', function(){
  it('it should return string into an array', function(){
    assert.deepEqual(string(stri),[
  [ ' 1 ', '3' ],
  [ ' 2 ', '7' ],
  [ ' 3 ', '10' ],
  [ ' 5 ', '14.50' ] ]);


  })
  it('it should give me the price of each avo', function(){

    assert.deepEqual(price_per_avo(newStr), ["3.00", "3.50", "3.33", "2.90"]);
  })
  it('it shold give me the cheapest deal', function(){

    assert.equal(cheapest_deal(prices),2.9)
  })

  it('it should give me the expensive deal', function(){
    assert.equal(expensive_deal(prices), 3.5)
  })
it('it should give me the average', function(){
  assert.equal(average(prices), 3.1825)
})
});
