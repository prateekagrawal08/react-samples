
export const getSubStr = (inputValue) => {
    const valArray = inputValue.split('');
    let splitString = '';
    const asciiValArray = [];
    const arraySubStrings = [];
    valArray.map((value, index)=> {
        asciiValArray.push(value.charCodeAt(0));
    })
    asciiValArray.map((value, index) => {
        const lastItemValue = valArray[index - 1];
        const getAsciiLast = lastItemValue ? lastItemValue.charCodeAt(0) : 0;
        if (index === 0) {
            splitString = valArray[index];
        }
        else if (value >= getAsciiLast) {
            splitString = splitString.concat(valArray[index])
        }
        else {
            arraySubStrings.push(splitString);
            splitString = valArray[index];
        }
        console.log('split String', splitString);
    })
    arraySubStrings.push(splitString);
    return arraySubStrings;

}

export const getLongestItemInArray = (subStrOutput)=> {
    return subStrOutput.length > 0 && subStrOutput.reduce(function(a, b) {
        return a.length > b.length ? a : b
    })
}


export const closureExample = ()=> {
    let cache = {};
    return number => {
        if(cache[number]){
            console.log('Take from Cache');
            return cache[number];
        }
        const addedNumber = number * 5;
        console.log('First Time Execution');
        cache[number] = addedNumber;
        return addedNumber;
    }
}



