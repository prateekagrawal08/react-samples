import React, {Fragment, useEffect, useState} from 'react';
import {closureExample, getLongestItemInArray, getSubStr,} from "../../utilites/utility";
import axios from 'axios';
import {fetchDataFromApi} from "../../utilites/hooks/customhooks";

const Directory = ()=> {

    const [subStr, setSubStr] = useState('');
    const [subStrOutput, setSubStrOutput] = useState([]);
    const [incremeter, setIncrementer] = useState(0);
    const protectedClosure = closureExample();
    const [query, setQuery] = useState('redux');

    // Custom Hooks Example
    const [{ data, isLoading, isError }, doFetch] = fetchDataFromApi(
        'https://hn.algolia.com/api/v1/search?query=redux',
        { hits: [] },
    );

    useEffect(()=>{
         setSubStrOutput(getSubStr(subStr));
    }, [subStr]);

    // Callback way
   useEffect(  () => {
       const fetchData = async (getResult)=> {
           const result = await  axios(
               'https://hn.algolia.com/api/v1/search?query=redux',
           );
           getResult(result);
       }
       fetchData(getResult);
       console.log('Output', );
   }, [])

    const getResult = (result)=> {
       console.log('Callback - Result', result);
    }

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

    const doubleNumbers = (...args) => {
        console.log('args', args )
        return args.map(a => a * 2)
    }
    console.log('Double ', doubleNumbers(1,2,3))

    console.log('Length & Longest String ', subStrOutput, longestString)
    return(<div>
        <Fragment>
            <form onSubmit={event => {
                doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`);
                event.preventDefault();
            }}>

            <input
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {isError && <div>Something went wrong ...</div>}
            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul>
                    {data.hits.map(item => (
                        <li key={item.objectID}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            )}
        </Fragment>

        <list>{['Evan', 'Ben', 'Maria', 'Daniel'].map(name => (<span>{name}</span>))}</list>
        <br/>
        <br/>
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
