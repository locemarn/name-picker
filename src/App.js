import React, {useState} from 'react';

import { NamePicker } from './components/name-picker'
import {Search} from "./components/search";
import {ShortList} from "./components/short-list";
import {ResetSearch } from "./components/reset-search";
import {Footer} from "./components/footer";


function App() {
  const [searchValue, setSearchValue] = useState("")
  const [shortList, setShortList] = useState([])

  return (
    <>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <NamesContainer
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        shortList={shortList}
        setShortList={setShortList}
      />
    </>
  )
}

function NamesContainer({
  searchValue,
  setSearchValue,
  shortList,
  setShortList
 }) {
  return (
    <>
      <ShortList shortList={shortList} setShortList={setShortList} />
      <NamePicker searchValue={searchValue} shortList={shortList} setShortList={setShortList} />
      <ResetSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <Footer />
    </>
  )
}

export default App;
