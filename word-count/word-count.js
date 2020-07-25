// The array of words to counts.
words = [
  'some words', 'repeat', 'word', 'test', 'repeat',
  'repeat', 'some words', 'test', 'another word', 'test'
]

// The map to store the word counts in.
// The structure will be
// 'word' => number of appearances of 'word'
wordCounts = new Map()

// Iterate over each word in the array.
for(let word of words) {
  // Check if we haven't seen this word before.
  if(!wordCounts.has(word)) {
    // We haven't seen this word before. Set its count to 0.
    // because next in the loop we'll increment the count by 1.
    wordCounts.set(word, 0)
  }

  // Get the current count of this word
  var count = wordCounts.get(word)
  // Increment the count
  count = count + 1
  // Store the new count
  wordCounts.set(word, count)
}

// Print out the count for each word.
for(let word of wordCounts.keys()) {
  console.log("Word '" + word + "' appeared " + wordCounts.get(word) + " time(s).")
}
