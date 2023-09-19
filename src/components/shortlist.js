import React from "react";

export function Shortlist({shortlist, setShortlist}) {
    return (
        <pre>{JSON.stringify(shortlist)}</pre>
    );
}