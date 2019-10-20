import React, { useState, useEffect } from "react";

export default function SearchForm(props) {

    const [searchTerm, setSearchTerm] = useState("");

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const results = props.studies.filter(study =>
          study
            .toString()
            .toLowerCase()
            .includes(searchTerm)
        );
        setSearchResults(results);
    }, [searchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
      <div className="search-container">
        <form>
          <label for="studies" className="search-label">
            <input
              id="studies"
              type="text"
              name="textfield"
              placeholder="Search Studies"
              className="search-input"
              value={searchTerm}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    );
}