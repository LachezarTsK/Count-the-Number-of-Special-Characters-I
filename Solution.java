
public class Solution {

    private static final int ALPHABET_SIZE = 26;

    public int numberOfSpecialChars(String word) {
        int[] lowerCaseAtLeastOnce = new int[ALPHABET_SIZE];
        int[] upperCaseAtLeastOnce = new int[ALPHABET_SIZE];

        for (char letter : word.toCharArray()) {
            if (Character.isLowerCase(letter)) {
                lowerCaseAtLeastOnce[letter - 'a'] = 1;
            } else {
                upperCaseAtLeastOnce[letter - 'A'] = 1;
            }
        }

        int numberOfSpecialChars = 0;
        for (int i = 0; i < ALPHABET_SIZE; ++i) {
            numberOfSpecialChars += lowerCaseAtLeastOnce[i] & upperCaseAtLeastOnce[i];
        }

        return numberOfSpecialChars;
    }
}
