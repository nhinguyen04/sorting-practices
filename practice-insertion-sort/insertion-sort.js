// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  const array = [...arr];
  const sorted = [];

  while (array.length > 0) {
    console.log(sorted.join(',')); // for chai spy
    const popped = array.pop();

    // sorted empty or has only 1 value
    if (sorted.length === 0) {
      sorted.push(popped);
    } else if (sorted.length === 1) {
      if (sorted[0] > popped) {
        sorted.splice(0, 0, popped);
      } else {
        sorted.push(popped);
      }
    } else {
      // sorted has more than 1 value
      for (let i = sorted.length - 1; i > 0; i--) {
        if (sorted[i - 1] < popped) {
          sorted.splice(i, 0, popped);
          i = 0;
        }

        // popped is smaller than all numbers in sorted
        if (i === 1 && sorted[i - 1] > popped) {
          sorted.splice(0, 0, popped);
        }
      }
    }
  }

  return sorted;
}

// const arr = [2,4,6,8,1,3,5,7,9];
// console.log(insertionSort(arr));

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  let div = 0;

  while (div < arr.length) {
    // console.log(arr.join(','));

    if (div === 0) {
      // do nothing
    } else if (div === 1) {
      if (div[1] < div[0]) {
        // swap
        const temp = div[1];
        div[1] = div[0];
        div[0] = temp;
      }
    } else {
      // all other scenarios
      let spliced = arr.splice(div, 1)[0];
      for (let i = div; i > 0; i--) {
        if (arr[i - 1] < spliced) {
          arr.splice(i, 0, spliced);
          i = 0;
        }

        // spliced is smaller than all numbers in sorted
        if (i === 1 && arr[i - 1] > spliced) {
          arr.splice(0, 0, spliced);
        }
      }
    }

    // increment divider
    div++;

    // for chai spy
    console.log(arr.join(','));
  }

  return arr;
}

// const arr = [2,4,6,8,1,3,5,7,9];

// console.log(insertionSortInPlace(arr));
// console.log(arr.splice(2, 1));

module.exports = [insertionSort, insertionSortInPlace];
