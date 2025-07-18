// function to convert decimal numbers to binary

function convertDecimalToBinary(number) {
    if (Number.isNaN(number) || !number) { //making sure that the value is valid.
        console.log('Invalid value. It is not a number.');
        return;
    }     

    //spliting the number to get both integer and fractional part
    let conversionToString = String(number);
    let splited = conversionToString.split('.');

    let quotient = 0,
        numberToDivide = Number(splited[0]),
        remainders = [],
        fractionalPart = [];

    //in the integer part we should divide by 2 to rest of it is the binary correspondent.
    //once this part is finished all rest vales gonna be read fron the end to the start
    //it's the reason i'm using unshift to insert in the array (doing that i don't need 
    //to revert the array in order to read it)
    do {
        quotient = Math.floor(numberToDivide / 2);
        let remainder = numberToDivide % 2;
        remainders.unshift(remainder);
        numberToDivide = quotient;
    } while (quotient > 0);

    //checking if it's a fraction
    if (splited[1]) {
        let result = 0,
            numberToMultiply = parseFloat('.' + splited[1]);
        
        //to fraction we are going to multiply by 2
        //some fractional numbers will correspond to a infinite binary number
        //it's the reason I'm limiting it to 10 characters
        do {
            result = numberToMultiply * 2;
            let intergerPart = Math.floor(result);
            fractionalPart.push(intergerPart);
            numberToMultiply = result - intergerPart;
        } while (numberToMultiply != 0 && fractionalPart.length < 10);
    }

    let integerSide = remainders.join().replaceAll(',', '')
        fractionalSide = fractionalPart.join().replaceAll(',', '');
    
    let binaryValue = integerSide + '.' + fractionalSide;

    console.log(`${number} (decimal) = ${binaryValue} (binary)`);
}

convertDecimalToBinary(7897.89);