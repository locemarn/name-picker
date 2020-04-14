import React, {useState} from 'react';

import { NamePicker } from './components/name-picker'
import {Search} from "./components/search";
import {ShortList} from "./components/short-list";


function App({names}) {
  const [searchValue, setSearchValue] = useState("")
  const [shortList, setShortList] = useState([])

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <ShortList shortList={shortList} setShortList={setShortList} />
      <NamePicker names={names} searchValue={searchValue} shortList={shortList} setShortList={setShortList} />
    </>
  )
}

export default App;
