function calculateAverage(numbers) {
  if (numbers.length === 0) {
    throw new Error("The array is empty");
  }

  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4])); // Output: 2.5
