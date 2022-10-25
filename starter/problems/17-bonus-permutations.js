/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here


let permutations = (arr) =>{
  let results = []
  perms = (subArr, currentArr) =>{
    // Base case
    if(subArr.length === 0 ){
      console.log(results)
      results.push(currentArr)
    }

    for(i = 0; i< subArr.length; i++ ){
      let newSubArr = subArr.slice(0,i).concat(subArr.slice(i + 1))
      let newCurentArr = currentArr.concat(subArr[i])
      perms(newSubArr, newCurentArr)
    }
  }
  perms(arr, [])
  return results
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
