// HELPER FUNCTIONS:


// Import the WordCounter interface.

import WordCounter from "../../interface";


// A function that takes a string and mutates it in a way that makes it possible to correctly count individual words.
// It removes unnecessary punctuation, trims down whitespace and converts the string to lower case.
// Expect both the input and return values to be strings.

export const mutateString = (str: string): string => {

  // First of all clean the provided string of all undesired characters.
  // In this case this means everything except standard English characters (a-z),
  // a wide range of letters with accents, umlauts and diacritics etc. and standard numerals.

  // However, there are exceptions:
  // Some of those characters have to escape the cleanup in certain cases, because they are an integral part of a word in the English language.

  // This includes apostrophes in the middle of words (so not to affect valid English words such as "wouldn't" or "Jennifer's")
  // as well as trailing apostrophes after "s" (to preserve words like "hunters'" or "Chris'").

  // Find all the apostrophes that don't match this criteria and replace them with a whitespace.

  const cleanedOfApostrophes: string = str.replace(/((?<!s)['’]+[^a-zа-яÀ-ÖØ-öø-įĴ-őŔ-žǍ-ǰǴ-ǵǸ-țȞ-ȟȤ-ȳɃɆ-ɏḀ-ẞƀ-ƓƗ-ƚƝ-ơƤ-ƥƫ-ưƲ-ƶẠ-ỿ0-9]|[^a-zа-я0-9À-ÖØ-öø-įĴ-őŔ-žǍ-ǰǴ-ǵǸ-țȞ-ȟȤ-ȳɃɆ-ɏḀ-ẞƀ-ƓƗ-ƚƝ-ơƤ-ƥƫ-ưƲ-ƶẠ-ỿ]['’])/gi, " ");

  // Hyphens in the middle of words are also part of legitimate words (such as "check-in" or "father-in-law").

  // Find all of the hyphens that don't fall into this category and replace them with a whitespace.

  const cleanedOfHyphens: string = cleanedOfApostrophes.replace(/(-+[^a-zа-яÀ-ÖØ-öø-įĴ-őŔ-žǍ-ǰǴ-ǵǸ-țȞ-ȟȤ-ȳɃɆ-ɏḀ-ẞƀ-ƓƗ-ƚƝ-ơƤ-ƥƫ-ưƲ-ƶẠ-ỿ0-9]|[^a-zа-яÀ-ÖØ-öø-įĴ-őŔ-žǍ-ǰǴ-ǵǸ-țȞ-ȟȤ-ȳɃɆ-ɏḀ-ẞƀ-ƓƗ-ƚƝ-ơƤ-ƥƫ-ưƲ-ƶẠ-ỿ0-9]-+)/gi, " ");

  // Replace all other undesired characters with whitespace.

  const cleanedString: string = cleanedOfHyphens.replace(/[^a-zа-яÀ-ÖØ-öø-įĴ-őŔ-žǍ-ǰǴ-ǵǸ-țȞ-ȟȤ-ȳɃɆ-ɏḀ-ẞƀ-ƓƗ-ƚƝ-ơƤ-ƥƫ-ưƲ-ƶẠ-ỿ0-9-'’]/gi, " ");

  // Replace all multiple whitespace with a single whitespace.
  // Also remove possible leading and trailing whitespace
  // and finally convert the string to lower case.

  const mutatedString: string = cleanedString.replace(/\s+/g, " ").trim().toLowerCase();

  // Return the mutated string.

  return mutatedString;
};




// This function takes a string and returns a WordCounter object.
// For correct results, this should be a string that was returned from the mutateString function.

export const countWords = (str: string): WordCounter => {

  // Split the string into an array of words using whitespace as reference.
  // Also sort the array alphabetically.

  const wordArray: string[] = str.split(" ").sort();

  // In order to display a word-counter, the array will be transformed into an object.
  // Each word will be a key and the number of their occurrences will be displayed as values.

  // Initialize the word-counter as an empty object of type WordCounter.

  const wordCounter: WordCounter = {};

  // Loop through every item in the word array and add it as a key to the word-counter.

  for (const item in wordArray) {

    // Every unique key will get a value of 1.

    if (!(wordArray[item] in wordCounter)) {

      wordCounter[wordArray[item]] = 1;

      // Every key that already exists in the word-counter object gets 1 added to its value.

    } else {

      wordCounter[wordArray[item]]++;
    }
  }

  // Return the word-counter.

  return wordCounter;
};
