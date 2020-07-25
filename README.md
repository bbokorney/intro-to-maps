# Intro to Maps

This repo contains an introduction to hash maps. It uses Javascript
as the example language, but these concepts apply to any programming
language which has maps (which is probably almost all of them).

## Why learn about maps?

Maps are one of the most frequently used data structures. They can be utilized
to solve a wide variety of common problems you'll encounter when writing programs.
Being familiar with maps
and knowing how to use them is essential to becoming a skilled programmer.

## What's a map?

A [map (sometimes called a _hash map_ or _hash table_)](https://en.wikipedia.org/wiki/Hash_table)
is a data structure which has maintains a _mapping_ from a set of _keys_ to a set of _values_.

In a map, the _key_ is the item which you _index_ the data structure with. You tell the map
to store a specific _value_ with that key. At a later time you can query the map with the same key
and it will return the same value you stored at that key. Let's see an example.

```javascript
// Create an empty map.
> myMap = new Map()
Map {}

// Store a mapping from 'key-1' to 'value-1'.
// You write to the map using the `set('key', 'value')` function.
> myMap.set('key-1', 'value-1')
Map { 'key-1' => 'value-1' }

// Store a mapping from 'key-2' to 'value-2'.
> myMap.set('key-2', 'value-2')
Map { 'key-1' => 'value-1', 'key-2' => 'value-2' }

// Query the map for the value mapped to 'key-1'.
// It returns the same value we previously stored.
// You read from the map using the `get('key')` function,
// which returns the value stored at that key.
> myMap.get('key-1')
'value-1'

// Query the map for the value mapped to 'key-2'.
> myMap.get('key-2')
'value-2'

// Now the map contains the following data.
// {
//   'key-1' => 'value-1',
//   'key-2' => 'value-2'
// }
// Javascript will show us a representation of all
// the key/value pairs in the map if we print it.
> console.log(myMap)
Map { 'key-1' => 'value-1', 'key-2' => 'value-2' }
```

## Updating keys

If you already have a particular key in the map, you can
call `set('key', 'value') on the existing key with a new value
to update the value mapped to that key.

```javascript
// Create an empty map
> myMap = new Map()
Map {}

// Create entry 'key' => 'value'
> myMap.set('key', 'value')
Map { 'key' => 'value' }

// Update the entry for 'key' to 'new value'
> myMap.set('key', 'new value')
Map { 'key' => 'new value' }
```

## Deleting keys

You can remove a key => value mapping from
the map using the `delete('key')` function.

```javascript
// Add the mapping 'key-3' => 'value-3'.
> myMap.set('key-3', 'value-3')
Map {
  'key-1' => 'value-1',
  'key-2' => 'value-2',
  'key-3' => 'value-3' }

// Query for 'key-3'.
> myMap.get('key-3')
'value-3'

// Delete 'key-3'.
> myMap.delete('key-3')
true

// There is no longer an entry for 'key-3'.
> myMap.get('key-3')
undefined
```

## Keys with no value

What happens if you query the map with a key for which
you haven't stored a value at? The map will return a value
which represents that there is value stored at that key.

```javascript
> myMap.get('nothing-here')
undefined
```

You can also use the `has()` function to explicitly
check if the map has a particular key. This function
returns `true` if the key is present, and `false`
if it isn't.

```javascript
> myMap.has('key-1')
true
> myMap.has('nothing-here')
false
```

## Iterating over all key/value pairs

There are many ways to iterate over the keys and values of a map.

```javascript
// Iterate over the keys and for each one
// print the key.
> for(let key of myMap.keys()) {
... console.log(key)
... }
key-1
key-2

// Iterate over the values and for each one
// print the value.
> for(let value of myMap.values()) {
... console.log(value)
... }
value-1
value-2

// Iterate over the keys, for each one get the value,
// and print the mapping between them.
> for(let key of myMap.keys()) {
... console.log(key + " => " + myMap.get(key))
... }
key-1 => value-1
key-2 => value-2
```

Sometimes you might just want a list of all the keys in the map.
You can convert the list of keys to an array in Javascript
using the `Array.from()` function.

```javascript
> keys = Array.from(myMap.keys())
[ 'key-1', 'key-2' ]
```

## Example: word count

Let's see an example use case of map to solve the following problem:

Given an array of different words, some of which may appear multiple times,
for each word, print how many times the word appears in the array.

```javascript
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
```

This program is in `word-count/word-count.js`. If we run it we get this output.

```
$ node word-count/word-count.js
Word 'some words' appeared 2 time(s).
Word 'repeat' appeared 3 time(s).
Word 'word' appeared 1 time(s).
Word 'test' appeared 3 time(s).
Word 'another word' appeared 1 time(s).
```

## Example: unique words

A common problem when programming is to need a list of unique items. Maps
can help with this because the set of keys are always guaranteed to be unique.
We can create a unique list of items by inserting them as the keys of a map. In this case
it doesn't matter what value we're storing with each key, we're only interested
in the keys themselves to get our list of unique items.

```javascript
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
```

```
$ node unique-words/unique-words.js
Unique words
------------
some words
repeat
word
test
another word
```

In the input array many of the words appeared
multiple times. But when we print out the keys of
the map, we only get each word once.

## Example: User comments

Maps are useful when you have a unique identifier which can be used
to tie together multiple pieces of data. A common identifier in many
computer systems is a user id. User ids are helpful because in most systems
they are guaranteed to be unique among all users of the system. Let's
see how maps can be used in conjunction with user ids to solve the following problem:

Given a list of comments, create a map which can be used to find all the comments
for a particular user.

In this system we'll assume the `username` is our unique identifier.

```javascript
// The list of comments we need to process.
comments = [
  {username: "vatsal", text: "I enjoyed reading this."},
  {username: "alex", text: "Nice post!"},
  {username: "baker", text: "This was boring to read. zzz...."},
  {username: "alex", text: "That's not very nice Baker!"},
  {username: "vatsal", text: "Don't listen to Baker, he's being mean."},
  {username: "alex", text: "Can't wait until the next post!"}
]

// Map of 'username' => ['Array of comments', 'for this username']
userCommentsMap = new Map()

// Go through each comment.
for(let comment of comments) {
  // Check if we've seen this user before.
  if(!userCommentsMap.has(comment.username)) {
    // If we have seen this user before, initialize their
    // list of comments to an empty array.
    userCommentsMap.set(comment.username, [])
  }

  // In one line we're doing the following:
  // Getting the array of comments for this user.
  // Appending the new comment to the array.
  userCommentsMap.get(comment.username).push(comment.text)
}

// Print out the comments grouped by the author.
// Go through the list of usernames.
for(let username of userCommentsMap.keys()) {
  console.log("User comments for '" + username + "':")

  // Go through the array of comments for this user.
  for(let comment of userCommentsMap.get(username)) {
    console.log('  "' + comment + '"')
  }
}
```

If we run this program we get the following output:

```
$ node user-comments/user-comments.js
User comments for 'vatsal':
  "I enjoyed reading this."
  "Don't listen to Baker, he's being mean."
User comments for 'alex':
  "Nice post!"
  "That's not very nice Baker!"
  "Can't wait until the next post!"
User comments for 'baker':
  "This was boring to read. zzz...."
```

You can imagine how if we needed all the comments for username
'vatsal' then we could quickly look them up in the map, which is
easier than going through the list of comments every time (it
will also have better performance and run faster).

## Example: Unique usernames

TODO add example

Useful when you have a unique id, which is common. Username to user info mapping. Check if username is already taken

## Arrays vs Maps

TODO expand

- Keys need not be integers. They can be any object which can be hashed to a value, and
are often strings
- There is no ordering

