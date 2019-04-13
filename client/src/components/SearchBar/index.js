import React from "react";
import "./style.css"

const SearchBar = (props) => {
  return (
    <div className="searchBar">

      <form>
        <div className="buttonArea">
          <button onClick={props.changeSearchTerm}
            className={props.searchTerm === "title" ? "typeBtn active" : "typeBtn"}
            value="title">Title</button>
          <button onClick={props.changeSearchTerm}
            className={props.searchTerm === "author" ? "typeBtn active" : "typeBtn"}
            value="author">Author</button>
        </div>
        <div className="searchGroup">
          <input
            className="searchInput"
            type="text"
            onChange={props.handleInputChange}
            value={props.searchTerm === "title" ? props.title : props.author}
            placeholder={props.searchTerm === "title" ? "Enter Title Here" : "Enter Author Here"}
            name="searchTerm" />
          <input
            className="searchBtn"
            type="submit"
            onClick={props.search}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar;