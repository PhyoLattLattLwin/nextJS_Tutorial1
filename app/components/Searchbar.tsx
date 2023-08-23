"use client";

import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert(search);
      }}
    >
      <input
        type="search"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
