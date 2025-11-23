"use client";

import {createContext, useContext} from "react";

const defaultTheme = {
    'colors': {
        'primary': '#0070f3',
        'secondary': '#1c1c1e',
    }
}

const TeamContext = createContext(defaultTheme);

export default function ThemeProvider({children}) {
    return (
        <TeamContext.Provider value={defaultTheme}>
            {children}
        </TeamContext.Provider>
    )
}

export const useTheme = () => useContext(TeamContext);