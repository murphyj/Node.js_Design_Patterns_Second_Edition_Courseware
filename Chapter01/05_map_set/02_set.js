// Exercise 2: Sets
// Let's play a little card game
// We want to take a pair of hands each of which contain 5 unique cards (best hands are given a predefined set of rules).
// Combine those hands together and figure out what the best hand we can get from those two hands combined.
//
// A hand is 5 cards. So a best hand should also contain 5 cards maximum but can contain fewer if more are not available.
// Note: This is not a poker game
//
// All cards in the best hand MUST be of the same suit.
// The best hand is simply the hand which can score the most. By score we simply mean the adding the value of all the
// cards in the hand together. Cards are worth the numbers on their card. So numbers (1-10) are just worth their face
// value (apart from the Ace)
// Jack is worth 11, Queen 12, King 13 and Ace 14
//
// Cards are represented by the following symbols:
// Numbers 2,3,4,5,6,7,8,9,10
// Jack = J, Queen = Q, King = K, Ace = A
// Suits are represented by the following symbols:
// Heart = H, Clubs = C, Spades = S, Diamonds = D
//
// Write a Javascript class using two given any two sets (or hands) of 5 cards and calculate what the highest result of
// the two hands is. Don't worry about a perfect solution. This is just to get you used to using ES6 syntax and set
// functions. Best of luck!

// Example
// Hand 1: JD,  AS, 2S, 7H, AH
// Hand 2: 6H, 3S, JS, KS, QS

// Best hand is 3S, JS, QS, KS, AS with a score of 3 + 11 + 12 + 13 + 14 = 53