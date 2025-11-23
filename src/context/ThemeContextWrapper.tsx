import React, {useState} from "react";
import { lightTheme, darkTheme } from "@styles/theme";
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import ThemeContext from "@context/ThemeContext";
import type { Theme } from "@type/ConstantTypes";
import type { ChildrenProp } from "@type/propTypes";

// ? React Fast Refresh only allows React components and hooks in a file if the file is considered a module boundary.
// ! If the file exports any non-hook, non-component value → error.

//In your case, the hook is fine, but the provider file exports two values → one component & one hook.
//Normally this is okay.
//But Vite’s React plugin has a known quirk: a file exporting both component + hook + imports that aren’t components may still trigger the warning.
// ? That is why const useTheme =() => {return useContext(ThemeContext)}; is moved to a separate file useTheme.js

export const ThemeContextProvider:React.FC<ChildrenProp> = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setCurrentTheme((prevTheme:Theme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
    };

    return(
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
            <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    )
}