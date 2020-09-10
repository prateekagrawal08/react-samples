import React, {useState, useEffect} from 'react';
import {getSubStr, getLongestItemInArray, closureExample,} from "../../utilites/utility";

const Directory = ()=> {

    const [subStr, setSubStr] = useState('');
    const [subStrOutput, setSubStrOutput] = useState([]);
    const [incremeter, setIncrementer] = useState(0);
    const protectedClosure = closureExample();

    useEffect(()=>{
         setSubStrOutput(getSubStr(subStr));
    }, [subStr]);

    const getFocus = ()=> {
        console.log('Focus');
    }

    const getBlur = ()=> {
        console.log('Blur');
    }

    const getChangeValue = (event)=> {
        setSubStr(event.target.value);
    }

    const callIncrementer = ()=> {
        protectedClosure(2);
    }

    const longestString = subStrOutput.length > 0 && subStrOutput.reduce(function(a, b){
        return a.length > b.length ? a : b
    })
    console.log('Length & Longest String ', subStrOutput, longestString)
    return(<div>
        <label>Entered Input : </label>
        <input type="text" id="findSubStr" name="subStr" placeholder="Enter String " onFocus={getFocus} onBlur={getBlur} onChange={getChangeValue}></input>

        {subStrOutput.map((str, index)=> {
            return(<p> {str}</p>)
        })}
        <label>Longest String : </label> {getLongestItemInArray(subStrOutput)}
        <br/><br/>
        <label>{incremeter}</label>
        <br/><br/>
        <button onClick={callIncrementer}>Increment Me - Click</button>

    </div>);
}

export default Directory;
