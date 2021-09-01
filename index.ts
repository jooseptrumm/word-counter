// This is a program that will use the textract package
// to read the text contents of a file at the specified path,
// and output an alphabetic list of all unique words in the file,
// whilst also displaying the number of occurrences for each word.
// This list ignores differences in case, whitespace or punctuation.

// The output list will be an object defined by an interface,
// where keys are individual words, each holding a value for their number of occurrences in the file.


// Import the textract package and the custom callback function which will be evoked by textract.

import textract from "textract";
import callback from "./functions/callback";

// Obtain the filepath specified when running the program from the terminal.

const filePath: string = process.argv[2];

// Check if a filepath is specified.

if (typeof filePath === "string") {

  // Extract the text contents  of the specified file
  // and evoke the custom callback function.

   textract.fromFileWithPath(filePath, callback);

  // If no filepath is specified, output a message to the console.

} else {

  console.log(`Please provide a filepath!`);
}
