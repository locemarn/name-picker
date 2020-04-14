import React, {useContext} from "react";

import {NameList} from "./name-list";
import {NamesContext} from "../providers/name";


export function NamePicker({ searchValue, shortList, setShortList }) {
  const names = useContext(NamesContext)

  const filteredNames = names
    .filter(entry => entry.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter(entry => !shortList.includes(entry.id))

  function addToShortList(id) {
    setShortList([...shortList, id])
  }

  return (
    <NameList nameList={filteredNames} onItemClick={addToShortList} />
  )
}