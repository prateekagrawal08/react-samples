
// prateek
//  Steps
//  1. Break the string into array using split
//  2. Get the Unicode Character Values - of each Character and store in an array
//  3. If current index character unicode value > last character ASCII Value then concat
//  into the previously split string
//  else save in substring array and make split string as current char item#
//  4.  


export const getSubStr = (inputValue) => {

    const valArray = inputValue.split('');
    let splitString = '';
    const asciiccValArray = [];
    const arraySubStrings = [];
 
    valArray.map((value, index)=> {    
        asciiccValArray.push(value.charCodeAt(0));
        console.log('asciiccValArray', asciiccValArray)
    })
    asciiccValArray.map((value, index) => {
        const lastItemValue = valArray[index - 1];
        console.log('lastItemValue', lastItemValue)
        const getAsciiLast = lastItemValue ? lastItemValue.charCodeAt(0) : 0;
        console.log('getAsciiLast', getAsciiLast)
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


export const getLongestItem = (subStrArray)=> {
    return subStrArray.reduce(function(a,b){
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


export const closureSample = () => {
    let cache = {};
    return number => {
     if(cache[number]){
        return cache[number];
     }
     const add = number * 5;
     cache[number]= add;
     return add;

    }
}
