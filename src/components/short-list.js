import React, {useContext} from "react";
import { NameList } from "./name-list";
import {NamesContext} from "../providers/name";


export function ShortList({ shortList, setShortList }) {
  const names = useContext(NamesContext)

  const shortListedNames = names.filter(entry => shortList.includes(entry.id))

  function removeFromShortList(id) {
    setShortList(shortList.filter(i => i !== id))
  }

  const hasNames = shortListedNames.length > 0

  return (
    <div className="short-list">
      <h2>{hasNames ? "Your shortlist" : "Click on a name to shortlist it"}</h2>
      {hasNames && (
        <>
          <NameList nameList={shortListedNames} onItemClick={removeFromShortList} />
          <hr />
        </>
      )}
    </div>
  )
}