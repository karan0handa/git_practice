// Write a function countBs that takes a string and returns number of "B"s.

function countBs(str) {
    let B_count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == "B") {
            B_count++;
        }
    }
    return B_count;
}

function countChar(str, char) {
    let char_count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == String(char)) {
            char_count++;
        }
    }
    return char_count;
}

let str = "BBBThere are 3 B's before thisB"
console.log(countBs(str));
console.log(countChar(str, "b"))