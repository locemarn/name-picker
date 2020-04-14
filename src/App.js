import React from 'react';

import { NamePicker } from './components/name-picker'
import {Search} from "./components/search";
import {ShortList} from "./components/short-list";
import {ResetSearch } from "./components/reset-search";
import {Footer} from "./components/footer";


function App() {
  return (
    <>
      <Search />
      <NamesContainer />
    </>
  )
}

function NamesContainer() {
  return (
    <>
      <ShortList />
      <NamePicker />
      <ResetSearch />
      <Footer />
    </>
  )
}

export default App;
