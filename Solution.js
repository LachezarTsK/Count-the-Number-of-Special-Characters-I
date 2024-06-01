
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
    const ALPHABET_SIZE = 26;
    const lowerCaseAtLeastOnce = new Array(ALPHABET_SIZE).fill(0);
    const upperCaseAtLeastOnce = new Array(ALPHABET_SIZE).fill(0);

    for (let letter of word) {
        if (isLowerCase(letter)) {
            lowerCaseAtLeastOnce[getIndex(letter)] = 1;
        } else {
            upperCaseAtLeastOnce[getIndex(letter)] = 1;
        }
    }

    let numberOfSpecialChars = 0;
    for (let i = 0; i < ALPHABET_SIZE; ++i) {
        numberOfSpecialChars += (lowerCaseAtLeastOnce[i] & upperCaseAtLeastOnce[i]);
    }

    return numberOfSpecialChars;
};

/**
 * @param {string} letter
 * @return {boolean}
 */
function isLowerCase(letter) {
    return letter >= 'a' && letter <= 'z';
}

/**
 * @param {string} letter
 * @return {number}
 */
function getIndex(letter) {
    return letter.codePointAt(0) - (isLowerCase(letter) ? ('a'.codePointAt(0)) : ('A'.codePointAt(0)));
}
