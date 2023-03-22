// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length < 2) {
    return arr;
  }

  // Divide the array in half
  const halfIndex = Math.floor(arr.length / 2);
  const leftSide = arr.slice(0, halfIndex);
  const rightSide = arr.slice(halfIndex, arr.length);
  // Merge the halves together and return
  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  let result = [];

  while (arrA.length && arrB.length) {
    if (arrA[0] > arrB[0]) {
      result.push(arrB.shift());
    } else {
      result.push(arrA.shift());
    }
  }

  // add the rest
  while (arrA.length) {
    result.push(arrA.shift());
  }
  while (arrB.length) {
    result.push(arrB.shift());
  }

  return result;
}

module.exports = [merge, mergeSort];
