// use .replace to remove all vowels, compare str lengths between two
function hasMoreVowels(word) {
  let vowelCount = word.replace(/[^aeiou]/gi, "").length; // replace anything that doesn't match ^aeious, g(lobally) regardless of index flag
  if (vowelCount > word.length / 2) {
    return true;
  } else {
    return false;
  }
}
console.log(hasMoreVowels("moose"));
console.log(hasMoreVowels("mice"));
