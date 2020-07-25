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
  // Check if we haven't seen this user before.
  if(!userCommentsMap.has(comment.username)) {
    // If we haven't seen this user before, initialize their
    // list of comments to an empty array.
    userCommentsMap.set(comment.username, [])
  }

  // In one line we're doing the following:
  // - Getting the array of comments for this user.
  // - Appending the new comment to the array.
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
