import React, {useState, useRef, useEffect} from "react";

export function Search() {
  const [searchValue, setSearchValue] = useState("")
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