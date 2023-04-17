function isPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return reversedWord === word;
}


/* 
  Convert the input word to an array of characters.
  Create a new array that is the reverse of the original array.
  Convert the reversed array back to a string.
  Check if the reversed string is equal to the original string.
*/

/*
  This is a recursive function that checks if a given word is a palindrome. The function takes in a single parameter, word, which is the string that we want to check for palindrome-ness.

  The first if statement checks if the length of the word is 0 or 1, which are the base cases for the recursion. If the word is empty or has only one character, we can consider it a palindrome and return true.

  The second if statement checks if the first and last characters of the word are equal. If they are, we recursively call the isPalindrome() function with a substring of the original word that excludes the first and last characters. This process continues until we reach the base cases or until we find two characters that aren't equal, in which case we return false.

  The function returns true if the original word is a palindrome, and false otherwise.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
