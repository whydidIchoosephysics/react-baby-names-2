import {NamePicker} from './components/name-picker';
import {Search} from './components/search';
import {Shortlist} from './components/shortlist';

import {Fragment, useState} from "react";


function App({names}) {
    const [searchValue, setSearchValue] = useState('');
    const [shortlist, setShortlist] = useState([]);

    return (
      <Fragment>
        <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}/>
        <Shortlist
            names={names}
            shortlist={shortlist}
            setShortlist={setShortlist}/>
        <NamePicker
            names={names}
            searchValue={searchValue}
            shortlist={shortlist}
            setShortlist={setShortlist}/>
      </Fragment>
  )
}

export default App;
