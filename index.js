/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.
*/

// capitalize the 0 index first
// LOOP: look at each character, is it a space?
//     IF we find a space:
//       take note of the indexed
//       continue to the next
//     IF we've taken note of the previous index:
//       capitalie the letter


const capitalizeWords = (sentence) => {
    //write your solution here
    let newString = sentence[0].toUpperCase();
    for (let i = 1; i < sentence.length; i++) {
        if (sentence[i - 1] === ' ') {
            newString += sentence[i].toUpperCase();
        } else
            newString += sentence[i];
    }
    return newString;
}
console.log(capitalizeWords("hello world from javascript"))

capitalizeWords("hello world from javascript");
// → "Hello World From Javascript"

capitalizeWords("javaScript");
// → "JavaScript"
