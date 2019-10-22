import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
 
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(study)}>
        <input
          onChange={handleInputChange}
          placeholder="study"
          value={study}
          name="study"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
// NM
