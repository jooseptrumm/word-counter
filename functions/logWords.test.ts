// This module contains ts-jest testing for the callback function.


// Import the callback function.

import logWords from "./logWords";

// Import the WordCounter interface for type checking.

import WordCounter from "../interface";


// This file will run two tests on the callback function.
// The first one inputs a valid string to the function,
// the second one inputs an error.

// Create a valid string input for the callback function and define an expected result.

const inputValid: string = `2020. aasta kauneimad raamatud valisid välja disaini- ja kirjastusprofessionaalidest koosnevad žüriid.
Kokku esitati konkursile 145 raamatut ning 44 lasteraamatut kokku 87 kirjastuselt,
millest žürii valis välja 25 kauneimat Eesti raamatut ja 5 lasteraamatut.
Rahva Raamatu eripreemia võitis Piret Raua "Kaotatud sõrmed". Võitjad kuulutati välja kultuurisaates "OP".`;

const outputValid: WordCounter = {
  '5': 1,
  '25': 1,
  '44': 1,
  '87': 1,
  '145': 1,
  '2020': 1,
  aasta: 1,
  disaini: 1,
  eesti: 1,
  eripreemia: 1,
  esitati: 1,
  ja: 2,
  kaotatud: 1,
  kauneimad: 1,
  kauneimat: 1,
  kirjastuselt: 1,
  kirjastusprofessionaalidest: 1,
  kokku: 2,
  konkursile: 1,
  koosnevad: 1,
  kultuurisaates: 1,
  kuulutati: 1,
  lasteraamatut: 2,
  millest: 1,
  ning: 1,
  op: 1,
  piret: 1,
  raamatu: 1,
  raamatud: 1,
  raamatut: 2,
  rahva: 1,
  raua: 1,
  'sõrmed': 1,
  valis: 1,
  valisid: 1,
  'välja': 3,
  'võitis': 1,
  'võitjad': 1,
  'žürii': 1,
  'žüriid': 1
}


// Create a custom error for inputting into the callback function and define the expected output.

const inputInvalid: Error = new Error("Test error");

const outputInvalid: string = "There was an error reading the file:";




// Test the callback function when provided with a valid string as an input.

test("run mutateString and countWords sequentially to convert text content from a file into a word-counter object", () => {
  expect(logWords(null, inputValid)).toEqual(outputValid);
});

// Test the callback function when provided with an invalid input.

test("return a string containing an error message when provided with an invalid input", () => {
  expect(logWords(inputInvalid, null)).toContain(outputInvalid);
});
