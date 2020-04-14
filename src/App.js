import React, {useState} from 'react';

import { NamePicker } from './components/name-picker'
import {Search} from "./components/search";


function App({names}) {
  const [searchValue, setSearchValue] = useState("")

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <NamePicker names={names} searchValue={searchValue} />
    </>
  )
}

export default App;
