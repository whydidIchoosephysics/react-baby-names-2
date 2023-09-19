import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export function AppStateProvider({ children }) {
    const [searchValue, setSearchValue] = useState("");
    const [shortlist, setShortlist] = useState([]);

    const value = {
        searchValue,
        setSearchValue,
        shortlist,
        setShortlist,
    };

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    );
}

export function useAppState() {
    const context = useContext(AppStateContext);
    if (!context) {
        throw new Error("You probably forgot a <AppStateProvider> context provider");
    }
}
