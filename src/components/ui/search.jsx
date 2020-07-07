import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const handleChange = (query) => {
    setText(query);
    getQuery(query);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          value={text}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
