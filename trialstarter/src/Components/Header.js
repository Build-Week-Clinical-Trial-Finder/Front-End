import React from "react";
import logo from "../trialstarter@2x.png";
import SearchBar from "./SearchBar.js";

export default function Header(props) {

    return (
      <header>
        <img src={logo} alt="logo" className="logo" />
        <SearchBar studies={props.studies} searchResults={props.searchResults} setSearchResults ={props.setSearchResults}  />
      </header>
    );
}