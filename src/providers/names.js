import React, {createContext} from "react";

import {names} from "../data"

// 1. Create a context
export const NamesContext = createContext()

// 2. Context Provider
export function NamesProvider({children}) {
    return (
        <NamesContext.Provider value={names}>
            {children}
        </NamesContext.Provider>
    )
}

