// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}

    str.split('').forEach(char => charMap[char] = charMap[char] + 1 || 1)
    console.log(charMap)

    return Object.keys(charMap).reduce((max, char) => charMap[char] > charMap[max] ? char : max)
}

module.exports = maxChar;
