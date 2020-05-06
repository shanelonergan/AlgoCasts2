// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    strArr = str.split('')

    strArr.forEach((char, index) => {
        const previous = strArr[index - 1]

        if (previous === ' ' || !previous) {
            strArr[index] = char.toUpperCase()
        }
    })

    return strArr.join('')
}

module.exports = capitalize;
