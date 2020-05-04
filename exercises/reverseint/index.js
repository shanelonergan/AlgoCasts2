// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(int) {
    const sign = Math.sign(int)
    const strArr = int.toString().split('')

    const reverseStr = strArr.reduce((reverse, char) => char + reverse)

    return parseInt(reverseStr) * sign
}

module.exports = reverseInt;
