
var screen = document.getElementById("input");
var numChar;
var currentChar, previousChar;
var operation = ["+", "-", "*", "/"];


function ClearInput() {
    screen.value = "";
}

function display(c) {
    screen.value += c;
    numChar = screen.value.length; 
    currentChar = c;
    getPreviousChar();
}

function calculate() {
    screen.value = eval(screen.value);
}

function getPreviousChar() {
    previousChar = screen.value.substring(numChar - 2, numChar - 1);
    CheckSyntax();
}

function CheckSyntax() {
    if (operation.includes(currentChar) && numChar == 1) {
        removeChar(); 
    }
    if (operation.includes(previousChar) && operation.includes(currentChar)) {
        if (previousChar == currentChar) {
            removeChar(); 
        } else {
            overWrite();
        }
    }
}

function overWrite() {
    screen.value = screen.value.slice(0, numChar - 2) + screen.value.slice(numChar - 1);
}

function removeChar() {
    screen.value = screen.value.substring(0, numChar - 1); 
}
