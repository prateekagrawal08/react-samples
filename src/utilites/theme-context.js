// Make sure the shape of the default value passed to
// createContext matches the shape that the consumers expect!
import {themes} from "./constants";
import React from "react";

export const ThemeContext = React.createContext({
    theme: themes.dark,
    firstClick: () => {},
    secondClick: ()=> {}
});
