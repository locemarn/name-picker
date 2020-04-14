import React, { useRef, useEffect } from "react";
import {useAppState} from "../providers/app-state";


export function Search() {
  const { searchValue, setSearchValue } = useAppState()

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  function handleChange(event) {
    setSearchValue(event.target.value)
  }

  return (
    <header>
      <input type="text" ref={inputRef} placeholder="Type a name..." value={searchValue} onChange={handleChange}/>
    </header>
  )
}