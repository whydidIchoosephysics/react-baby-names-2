import {Fragment, useState} from "react";

// Components
import {NamePicker} from './components/name-picker';
import {Search} from './components/search';
import {Shortlist} from './components/shortlist';
import {ResetSearch} from './components/reset-search';
import {Footer} from './components/footer';

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [shortlist, setShortlist] = useState([]);

    return (
      <Fragment>
          <main>
            <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}/>
            <Shortlist
                shortlist={shortlist}
                setShortlist={setShortlist}/>
            <NamePicker
                searchValue={searchValue}
                shortlist={shortlist}
                setShortlist={setShortlist}/>
            <ResetSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}/>
          </main>
          <Footer/>
      </Fragment>
  )
}

export default App;
