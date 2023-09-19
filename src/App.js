import {NamePicker} from './components/name-picker';
import {Search} from './components/search';
import {Fragment} from "react";

function App({names}) {
  return (
      <Fragment>
        <Search/>
        <NamePicker names={names} />
      </Fragment>
  )
}

export default App;
