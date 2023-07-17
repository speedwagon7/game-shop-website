import React from "react";
import SearchButton from "../Atoms/SearchButton";
import SearchInput from "../Atoms/SearchInput";

const SearchBar = () => {
    return(
        <form className="d-flex" role="search">
            <SearchInput/>
            <SearchButton/>
        </form>
    )
};

export default SearchBar;