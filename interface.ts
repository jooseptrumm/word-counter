// The interface of the object that will be output to the console when the program is run.
// This object will have any number of individual words as keys and number of occurrences as values.

export default interface WordCounter {
  [key: string]: number
}
