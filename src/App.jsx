import React, { useState } from "react";
import SearchBar from "./MyComponent/Searchbar";
import WallpaperGrid from "./MyComponent/WallpaperGrid";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("nature"); 

  return (
    <div >
      <SearchBar onSearch={setQuery} />
      <WallpaperGrid query={query} />
    </div>
  );
};

export default App;
