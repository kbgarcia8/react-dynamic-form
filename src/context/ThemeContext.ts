import { createContext } from "react";
import type { themeContextValue } from "../type/propTypes";

// ! Need to seperate createContext() since React Fast Refresh treats it as a non component which means in ThemeContext.jsx it should not be included

const ThemeContext = createContext<themeContextValue | undefined>(undefined);

export default ThemeContext;
