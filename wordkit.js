// A palindrome is any word which reads the same from left to right and right to left.

// Example:

// "racecar" when reversed is still “racecar”, hence it is a palindrome

// "alpha" when reversed is “ahpla" which is not the same as “alpha”, hence not a palindrome.


// To make any word a palindrome, we can simply attach the reversed word after the original word.

// Example: "alpha" when reverses is “ahpla” which is not a palindrome, BUT if we attach the two strings together they become “alphaahpla” which is a palindrome.


// Design a class (or constructor function) named WordKit which can check if a word is a palindrome or not, and also make any word a palindrome if the user wants. It should have the following member methods

// reverse(str) - method to return the reversed string of the passed string str

// isPalindrome(str) - check if the passed str is a palindrome or not. Returns true if str is palindrome, false otherwise.

// makePalindrome(str) - converts the passed string into a palindrome and returns the new string.

class WordKit {
    reverse(str) {
        let revString = '';
        for (let i = str.length - 1; i >= 0; i--) {
            revString += str[i];
        }
        return revString;
    }

    isPalindrome(str) {
        return str === this.reverse(str);
    }

    makePalindrome(str) {
        if (!this.isPalindrome(str)) {
            return str + this.reverse(str);
        }
        return str; 
    }
}