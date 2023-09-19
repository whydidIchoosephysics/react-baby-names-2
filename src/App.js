import {NamePicker} from './components/name-picker';
import {Search} from './components/search';
import {Fragment, useState} from "react";

function App({names}) {
    const [searchValue, setSearchValue] = useState('');

    return (
      <Fragment>
        <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        <NamePicker names={names} searchValue={searchValue}/>
      </Fragment>
  )
}

export default App;
