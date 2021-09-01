// THE CALLBACK FUNCTION:

// The callback function will be evoked by the textract package
// after it has finished reading the text content of the specified file.
// If the file was successfully read,
// the callback function will output an object into the console,
// which is defined by the WordCounter interface.
// In case of an error, the callback will log an error message.


// Import the WordCounter interface.

import WordCounter from "../interface";

// Import helper functions.

import { mutateString, countWords } from "./helpers/helpers";


// The function takes two parameters: an error and the text content of the file.
// The typings for the callback function come from the @types/textract package.

 const callback = (err: Error | null, text: string | null): string | WordCounter => {

  // If the file is successfully read, the text variable will hold a string.

  if (typeof text === "string") {

    // Modify the string so that the words can be correctly counted.

    const mutatedString: string = mutateString(text);

    // Create the word-counter object from the modified string.

    const wordCounter: WordCounter = countWords(mutatedString);

    // Output the word-counter to the console.

    console.log(wordCounter);

    // Return the word-counter for testing purposes.

    return wordCounter;

    // If the text variable does not hold a string, it means that there was an error.

  } else {

    // Create an error message using the error object that was passed into the callback.

    const message = (`There was an error reading the file: ${err}`);

    // Output the message into the console.

    console.log(message);

    // Return the message for testing purposes.

    return message;
  }
};

// Export the callback function.

export default callback;
