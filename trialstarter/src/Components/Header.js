import React from "react";
import logo from "../trialstarter.svg";
import SearchBar from "./SearchBar.js";

export default function Header(props) {

    return (
      <header>
        <img src={logo} alt="logo" className="logo" />
        <SearchBar studies={props.studies}/>
      </header>
    );
}