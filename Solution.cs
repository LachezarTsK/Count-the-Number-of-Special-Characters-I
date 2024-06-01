
using System;

public class Solution
{
    static readonly int ALPHABET_SIZE = 26;
    public int NumberOfSpecialChars(string word)
    {
        int[] lowerCaseAtLeastOnce = new int[ALPHABET_SIZE];
        int[] upperCaseAtLeastOnce = new int[ALPHABET_SIZE];

        foreach (char letter in word)
        {
            if (char.IsLower(letter))
            {
                lowerCaseAtLeastOnce[letter - 'a'] = 1;
            }
            else
            {
                upperCaseAtLeastOnce[letter - 'A'] = 1;
            }
        }

        int numberOfSpecialChars = 0;
        for (int i = 0; i < ALPHABET_SIZE; ++i)
        {
            numberOfSpecialChars += lowerCaseAtLeastOnce[i] & upperCaseAtLeastOnce[i];
        }

        return numberOfSpecialChars;
    }
}
