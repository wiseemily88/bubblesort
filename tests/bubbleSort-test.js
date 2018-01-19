var assert = require('chai').assert
var bubbleSort = require('../lib/bubbleSort')

describe('sorts an array', function() {
  context('bubbleSort', function() {
    it('it can sort all the numbers in descending order', function() {
      assert.equal(bubbleSort([7,3,8,2]),[ 2, 3, 7, 8 ])
    });

    it('it can sort all the letters in descending order', function() {
      assert.equal(bubbleSort(["f","k","a"]),[ 'a', 'f', 'k' ])
    });
  });
});
