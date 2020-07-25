// The array of words to find the unique list of.
words = [
  'some words', 'repeat', 'word', 'test', 'repeat',
  'repeat', 'some words', 'test', 'another word', 'test'
]

// The map to store the unique words in.
uniqueWords = new Map()

// Iterate over each word in the array.
for(let word of words) {
  // Add each word as a key in the map.
  // We set the value to 'true', but we could use
  // any value.
  uniqueWords.set(word, true)
}

// Print out each unique word.
console.log('Unique words')
console.log('------------')
for(let word of uniqueWords.keys()) {
  console.log(word)
}
