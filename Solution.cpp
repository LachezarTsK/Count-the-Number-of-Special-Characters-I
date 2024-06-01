
#include <array>
#include <string>
using namespace std;

class Solution {

    static const int ALPHABET_SIZE = 26;

public:
    int numberOfSpecialChars(const string& word) const {
        array<int, ALPHABET_SIZE> lowerCaseAtLeastOnce{};
        array<int, ALPHABET_SIZE> upperCaseAtLeastOnce{};

        for (const auto& letter : word) {
            if (islower(letter)) {
                lowerCaseAtLeastOnce[letter - 'a'] = 1;
            }
            else {
                upperCaseAtLeastOnce[letter - 'A'] = 1;
            }
        }

        int numberOfSpecialChars = 0;
        for (size_t i = 0; i < ALPHABET_SIZE; ++i) {
            numberOfSpecialChars += lowerCaseAtLeastOnce[i] & upperCaseAtLeastOnce[i];
        }

        return numberOfSpecialChars;
    }
};
