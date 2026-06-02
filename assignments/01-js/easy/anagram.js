/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
s1=str1.toLowerCase().replace(/\s/g, '');
s2=str2.toLowerCase().replace(/\s/g, '');   //<-- lowercase words and remove space

if(s1.length!==s2.length){
  return false
}
return s1.split('').sort().join('')===s2.split('').sort().join('')
}
console.log(isAnagram("listen","silent"));
console.log(isAnagram("hello","world"));


module.exports = isAnagram;