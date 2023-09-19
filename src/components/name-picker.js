import react from 'react';

import { NameList} from './name-list';
import { useNames } from "../providers/names";

export function NamePicker({ searchValue, shortlist, setShortlist}) {
    const names = useNames();

    const filteredNames = names
        .filter((entry) =>
        entry.name.toLowerCase().includes(searchValue.toLowerCase()))
        .filter((entry) => !shortlist.includes(entry.id))
    function addToShortList(id) {
        setShortlist([...shortlist, id]);
    }

    return (
        <NameList nameList={filteredNames} onItemClick={addToShortList} />
    )
}