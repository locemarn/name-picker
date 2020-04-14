import React, {useState} from 'react';

import { NamePicker } from './components/name-picker'
import {Search} from "./components/search";
import {ShortList} from "./components/short-list";
import {ResetSearch } from "./components/reset-search";
import {Footer} from "./components/footer";


function App({names}) {
  const [searchValue, setSearchValue] = useState("")
  const [shortList, setShortList] = useState([])

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <ShortList names={names} shortList={shortList} setShortList={setShortList} />
      <NamePicker names={names} searchValue={searchValue} shortList={shortList} setShortList={setShortList} />
      <ResetSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Footer />
    </>
  )
}

export default App;
