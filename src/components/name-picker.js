import react from 'react';
import { NameList } from './name-list';

export function NamePicker({names, searchValue, shortlist, setShortlist}) {

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