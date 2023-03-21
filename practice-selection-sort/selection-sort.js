

function selectionSort(arr) {

  const array = [...arr];
  const sorted = [];

  while (array.length > 0) {
    // Do not move this console.log
    console.log(sorted.join(","));

    const minIndex = array.indexOf(Math.min(...array));
    const min = array.splice(minIndex, 1)[0];
    sorted.push(min);
  }

  return sorted;
}



function selectionSortInPlace(arr) {
  let div = 0;

  while (div < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // find min
    let min = Infinity;
    for (let i = div; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }

    // move to div index
    const minIndex = arr.indexOf(min);
    const spliced = arr.splice(minIndex, 1)[0];
    arr.splice(div, 0, spliced);
    div++;
  }

  return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
