// Create a string that looks like a chessboard.
// Make a value "size", varying which changes the width and height of chess board.

let size = 8;
let string = "";

for (i = 1; i < size*(size+1); i++) {
    if (i % (size+1) == 0) string = string + "\n";
    else if (i % 2 == 0) string = string + "#";
    else string = string + " ";
}

console.log(string)