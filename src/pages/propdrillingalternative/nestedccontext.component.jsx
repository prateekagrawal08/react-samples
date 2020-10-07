import React, {useContext, useEffect, useState} from "react";
import {ThemeContext} from '../../utilites/theme-context'


function DeepNestingFirstChild() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    const { secondButtonCount, setFirstButtonCount } = useContext(ThemeContext);

    useEffect(()=> {
        console.log('From First Component - I am notifying - Second Button was clicked')
    }, [secondButtonCount]);

    return (
        <div>
            <p>{secondButtonCount}</p>
            <button
                onClick={()=> setFirstButtonCount(count=> count+1)}>
                First Button
            </button>
        </div>


    )
}

function  DeepNestingSecondChild(){
    const {  firstButtonCount , setSecondButtonCount} = useContext(ThemeContext);

    useEffect(()=> {
        console.log('From Second Component -> I am notifying - First Button was clicked')
    }, [firstButtonCount]);

    return (<div>
            <p>{firstButtonCount}</p>
            <button
                onClick={()=> setSecondButtonCount(count=>count+1)}
            >
               Second Button
            </button>
        </div>

    )
}



function Content() {
    return (
        <div>
            <DeepNestingFirstChild />
            <DeepNestingSecondChild></DeepNestingSecondChild>
        </div>
    );
}


const NestedMainPage = ()=> {

    const [firstButtonCount, setFirstButtonCount] = useState(0);
    const [secondButtonCount, setSecondButtonCount] = useState(0);
   const value = {firstButtonCount, setFirstButtonCount, secondButtonCount, setSecondButtonCount}

   return(
       <ThemeContext.Provider value = {value} >
           <Content/>
        </ThemeContext.Provider> )
};


export default NestedMainPage;
