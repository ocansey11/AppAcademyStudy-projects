/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
  let flatten = (arr, d = 0) =>{

    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        newArr = newArr.concat(flatten(arr[i]))
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr

  }
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;

}
