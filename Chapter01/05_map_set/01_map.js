// Exercise 1 - Maps
// Wheat and Chessboard problem
// If a chessboard were to have wheat placed upon each square such that one grain were placed on the first square,
// two on the second, four on the third, and so on (doubling the number of grains on each subsequent square),
// how many grains of wheat would be on the chessboard at the finish?
// For the purposes of our exercise and to prevent overflows let's just calculate the map for half of the chessboard.
// Keys should be used to represent the number of grains on that square of the chessboard with the value being the
// coordinate those grains are sat on.
//
// Columns are labelled a,b,c,d,e,f,g,h
// Rows are labelled 1,2,3,4,5,6,7,8
// For example the first two members of the map would be 1 => a1, 2 => b1, 4 => c1, 8 => d1 and so on...