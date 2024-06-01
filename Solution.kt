
class Solution {

    companion object {
        const val ALPHABET_SIZE = 26
    }

    fun numberOfSpecialChars(word: String): Int {
        val lowerCaseAtLeastOnce = IntArray(ALPHABET_SIZE)
        val upperCaseAtLeastOnce = IntArray(ALPHABET_SIZE)

        for (letter in word) {
            if (Character.isLowerCase(letter)) {
                lowerCaseAtLeastOnce[letter - 'a'] = 1
            } else {
                upperCaseAtLeastOnce[letter - 'A'] = 1
            }
        }

        var numberOfSpecialChars = 0;
        for (i in 0..<ALPHABET_SIZE) {
            numberOfSpecialChars += lowerCaseAtLeastOnce[i] and upperCaseAtLeastOnce[i]
        }

        return numberOfSpecialChars
    }
}
