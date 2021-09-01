// This module contains ts-jest testing for the helper functions.


// Import the helper functions.

import { mutateString, countWords } from "./helpers";

// Import the WordCounter interface for type-checking.

import WordCounter from "../../interface";


// Define the input and expected output for the mutateString function.

const mutateStringInput: string = `Harry's mother-in-law said: 'Come here!, it's 9 o'clock'  -"No", said Harry ,"I won't, better forget it!"`;

const mutateStringOutput: string = `harry's mother-in-law said come here it's 9 o'clock no said harry i won't better forget it`;


// Define the input and expected output for the countWords function.

const countWordsInput: string = "for real no way should we wait for the next bus let's wait for tram nr 7 instead"

const countWordsOutput: WordCounter = {
  7: 1,
  bus: 1,
  for: 3,
  instead: 1,
  "let's": 1,
  next: 1,
  no: 1,
  nr: 1,
  real: 1,
  should: 1,
  the: 1,
  tram: 1,
  wait: 2,
  way: 1,
  we: 1,
}




// Test the mutateString function.

test("modify a string to remove punctuation, trim whitespace and convert the it to lower case", () => {
  expect(mutateString(mutateStringInput)).toBe(mutateStringOutput);
});

// Test the countWords function.

test("convert a string to a word-counter object", () => {
  expect(countWords(countWordsInput)).toEqual(countWordsOutput);
});
