//creating a function that returns the very first unique char in a string
//example 1: "aabbccddefgg" => return: "e"
//example 2: "abbccdda" => return: null
//example 3: "oioigoighk" => return: "h"

function uniqueChar(text = '') {
    let char = null;
    for (let i = 0; i < text.length; i++) {        
        let newText = i == 0 ?
            text.slice(1, ) :
            text.slice(0, i) + text.slice((i + 1), );

        if (!newText.includes(text[i])) {
            char = text[i];
            break;
        }
    }

    return char;
};

console.log(uniqueChar('aabbccddefgg'));
console.log(uniqueChar('abbccdda'));
console.log(uniqueChar('oioigoighk'));
console.log(uniqueChar());
console.log(uniqueChar(''));