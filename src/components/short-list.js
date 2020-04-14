import React from "react";

export function ShortList({ shortList, setShortList }) {
  return <pre>{[...shortList]}</pre>
}