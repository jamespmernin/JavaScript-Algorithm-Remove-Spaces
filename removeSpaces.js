//REMOVE SPACES

const removeSpaces = str => {
  return str.replace(/\s+/g, ''); // source: https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript
}

console.log(removeSpaces("alphabet soup is green   "))

module.exports = {
  removeSpaces
}
