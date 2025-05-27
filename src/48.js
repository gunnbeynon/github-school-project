// Node.js code example

function calculateAverage(numbers) {
  if (numbers.length === 0) {
    throw new Error("Array is empty");
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function sortArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let leftHalf = sortArray(arr.slice(0, middle));
  let rightHalf = sortArray(arr.slice(middle));

  return merge(leftHalf, rightHalf);
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...right];
}
