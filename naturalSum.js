function naturalSum(n) {
  if (n < 0) {
    return 0;
  }
  return (n * (n + 1)) / 2;
}
// Test cases
console.log(naturalSum(5)); // Output: 15
console.log(naturalSum(10)); // Output: 55
console.log(naturalSum(0)); // Output: 0
console.log(naturalSum(-5)); // Output: 0