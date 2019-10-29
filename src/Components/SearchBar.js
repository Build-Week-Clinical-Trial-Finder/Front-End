import React, { useState, useEffect } from "react";

export default function SearchForm(props) {

    const [searchTerm, setSearchTerm] = useState("");

    // const [searchResults, setSearchResults] = useState([]);

    console.log(props.searchResults);

    useEffect(() => {
        const results = props.studies.filter(study =>
          study.brief_summary
            .toString()
            .toLowerCase()
            .includes(searchTerm)
        );
        props.setSearchResults(results);
    }, [searchTerm]);

    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    // console.log(searchResults);

    return (
      <div className="search-container">
        <form>
          <label htmlFor="studies" className="search-label">
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