
function numberOfSpecialChars(word: string): number {
    const ALPHABET_SIZE = 26;
    const lowerCaseAtLeastOnce: number[] = new Array(ALPHABET_SIZE).fill(0);
    const upperCaseAtLeastOnce: number[] = new Array(ALPHABET_SIZE).fill(0);

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


function isLowerCase(letter: string): boolean {
    return letter >= 'a' && letter <= 'z';
}


function getIndex(letter: string): number {
    return letter.codePointAt(0) - (isLowerCase(letter) ? ('a'.codePointAt(0)) : ('A'.codePointAt(0)));
}
