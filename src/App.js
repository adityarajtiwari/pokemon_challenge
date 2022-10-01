import "./styles.css";
import React, { useEffect, useState } from "react";
import HomePage from "./HomePage";
import Search from "./Search";

export default function App() {
  const [search, setSearch] = useState("");
  const onSearchHandler = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  return (
    <div className="App">
      <Search onChangeHandler={(e)=>onSearchHandler(e)}/>
      <HomePage />
    </div>
  );
}
