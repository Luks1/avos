//var appleSellerAscending = require('../appleSellerAscending');
var seller_cheapest_orange = require('../seller_cheapest_orange');
var assert = require('assert');





var obj ={
  "woolingsworth": {
    "apples": 4,
    "bananas": 3,
    "oranges": 12
  },

  "chockers": {
    "bananas": 2,
    "apples": 5,
    "oranges": 4
  },

  "pickle pay": {
    "bananas": 4,
    "oranges": 7
  },

  "shopwrong": {
    "apples": 2,
    "bananas": 3
  },

  "kwakspar": {
    "oranges": 9,
    "apples": 4
  }
};

describe('A cheapest shop', function(){
  it('it should give me the cheapest orange', function(){
    assert.equal(seller_cheapest_orange(obj),'chockers')
  })
//   it('it should give me apples price ascending', function(){
//     assert.deepEqual(appleSellerAscending(obj),[
//   { shop: "shopwrong", price: 2 },
//   { shop: "woolingsworth", price: 4 },
//   { shop: 'kwakspar', price: 4 },
//   { shop: "chockers", price: 5 }
// ]
// )
//   })
})
