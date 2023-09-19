import React from "react";

import { NameList } from "./name-list";
export function Shortlist({names, shortlist, setShortlist}) {

    const shortListedNames = names.filter((entry) =>
        shortlist.includes(entry.id));

    function removeFromShortlist(id) {
        setShortlist(shortlist.filter((entry) => entry !== id));
    }

    return (
        <div className="short-list">
            <NameList nameList={shortListedNames} onItemClick={removeFromShortlist} />
        </div>
    );
}