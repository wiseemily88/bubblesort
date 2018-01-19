var pry = require('pryjs');

function bubbleSort(unsorted_list) {
  var swapped = true;

  do {
    swapped = false;
    for (var i = 0; i < unsorted_list.length; i++) {
      if (unsorted_list[i] > unsorted_list[i + 1]) {
        var temp = unsorted_list[i];
        unsorted_list[i] = unsorted_list[i + 1];
        unsorted_list[i + 1] = temp;
        swapped = true;
      }
    }
  }
  while (swapped);
  return unsorted_list;
}

module.exports = bubbleSort
