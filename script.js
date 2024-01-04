function firstChar(inputString) {
    if (!inputString || inputString.trim() === '') {
        return '';
    }

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== ' ') {
            return inputString[i];
        }
    }

    return '';
}

// Examples
console.log(firstChar(' Rosa Parks ')); // Output: 'R'
console.log(firstChar(' Hello World ')); // Output: 'H'
console.log(firstChar(' ')); // Output: ''
console.log(firstChar('')); // Output: ''

const text = prompt("Enter text:");
alert(firstChar(text));
