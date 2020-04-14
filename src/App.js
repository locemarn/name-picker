import React from 'react';

import { NamePicker } from './components/name-picker'
import {Search} from "./components/search";


function App({names}) {
  return (
    <>
      <Search />
      <NamePicker names={names} />
    </>
  )
}

export default App;
