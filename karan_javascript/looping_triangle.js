let i = 0;
let j = 1;
let char = "#";
while (i <= 7) {
    while (j <= 7) {
        console.log(char);
        j = j + 1;
        char += "#";
    }
    i = i + 1;
}