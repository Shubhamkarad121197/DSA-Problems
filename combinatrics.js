// In Mathematics and Cryptography, combinatorics plays a vital role especially Permutations and Combinations

// Design a class (or constructor function) in Javascript that can calculate the number of Permutations and Combinations given the value of N (Total Items) and R(the number of items to be selected). It should have the following methods


// factorial(num) - method to calculate factorial of a number num

// findCombinations(N, R) - method to calculate the number of combinations of N with R according to the formula given below. Returns a single number

// findPermutations(N, R) - method to calculate the number of permutations of N with R according to the formula given below. Returns a single number.


// NOTE: R is always strictly less than N else the answer is 0.

// References
// Formula for Permutations is given by P(n,r) below and C(n,r) represents the number of Combinations. The exclamation mark (!) denotes the factorial.


// A factorial of a number (n) is the product of all the numbers less than n and greater than 1.

// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120

class Combinatorics {
      factorial(num){
            if(num<0) return 0;
            let result=1;
            for(let i=2;i<=num;i++){
                  result*=i
            }
            return result;
      }
      findCombinations(N,R){
            if(R>=N) return 0;
            return this.factorial(N)/(this.factorial(R) * this.factorial(N - R));
      }
      findPermutations(N,R){
             if (R>=N) return 0;
             return this.factorial(N)/(this.factorial(N-R))
      }
}
const comb = new Combinatorics();

console.log("Combinations (5C3):", comb.findCombinations(5, 3)); // Output: 10
console.log("Permutations (5P3):", comb.findPermutations(5, 3)); // Output: 60

console.log("Combinations (6C6):", comb.findCombinations(6, 6)); // Output: 0 (because R is not < N)
console.log("Permutations (4P5):", comb.findPermutations(4, 5)); // Output: 0 (invalid, R > N)
