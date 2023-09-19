import React, {Fragment, useContext} from "react";

import { NamesContext } from "../providers/names";
import { NameList } from "./name-list";
export function Shortlist({ shortlist, setShortlist}) {
    const names = useContext(NamesContext);

    const shortListedNames = names.filter((entry) =>
        shortlist.includes(entry.id));

    function removeFromShortlist(id) {
        setShortlist(shortlist.filter((entry) => entry !== id));
    }

    const hasNames = shortListedNames.length > 0;


    return (
        <div className="short-list">
            <h2>
                {hasNames ? "Your shortlist: " : "Click on a name to shortlist it."}
            </h2>
            {hasNames && (
            <Fragment>
                <NameList
                nameList={shortListedNames}
                onItemClick={removeFromShortlist}
            />
            <hr/>
            </Fragment>
            )}

        </div>
    );
}