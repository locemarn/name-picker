import React from "react";
import { NameList } from "./name-list";
import {useNames} from "../providers/name";
import {useAppState} from "../providers/app-state";


export function ShortList() {
  const names = useNames()
  const { shortList, setShortList } = useAppState()

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