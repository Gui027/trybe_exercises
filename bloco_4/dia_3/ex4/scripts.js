let size = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = size;
let midOfMatrix = (size + 1) / 2
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex++) {
    for(let columnIndex = 0; columnIndex <= size; columnIndex += 1) {
        if (columnIndex > controlLeft && columnIndex < controlRight) {
            inputLine = inputLine + symbol;
        } else {
            inputLine = inputLine + ' ';
        }
    }
    console.log(inputLine);
    inputLine = '';
    controlRight += 1;
    controlLeft -= 1;
}