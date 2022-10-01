import React from "react";

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          onChange={props.onChangeHandler}
          className="prompt"
          type="text"
          placeholder="Search Pokemon..."
        />
        <i className="search icon" />
      </div>
      <div className="results" />
    </div>
  );
};

export default Search;