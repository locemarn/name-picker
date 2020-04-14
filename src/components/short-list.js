import React from "react";
import { NameList } from "./name-list";


export function ShortList({ names, shortList, setShortList }) {
  const shortListedNames = names.filter(entry => shortList.includes(entry.id))

  function removeFromShortList(id) {
    setShortList(shortList.filter(i => i !== id))
  }

  return (
    <div className="short-list">
      <NameList nameList={shortListedNames} onItemClick={removeFromShortList} />
    </div>
  )
}