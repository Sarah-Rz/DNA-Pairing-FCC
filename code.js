// Question:
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
// The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

// My Solution:
function calculatePair (strand) {
  if (strand === "A") {
  return "T";
} else if (strand === "T") {
  return "A";
} else if (strand === "C") {
  return  "G";
} else if (strand === "G") {
  return  "C";
}
  } 

function pairElement(input) {
let initialStrand = input.split("");
let sequence= [];
initialStrand.forEach(initialStrandElement => {
let doubleHelix = [initialStrandElement, calculatePair(initialStrandElement)];
sequence.push(doubleHelix);
});
return sequence; 
}

//DNA Pairing- Free Code Camp- Intermediate Algorithm Scripting:
link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing
