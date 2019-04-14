import React from "react";
import "./style.css";
import SearchResultItem from "../SearchResultItem";

const SearchResultArea = (props) => {
  return (
    <div>
      {props.searched ? (<div className="SearchResultArea">
        {props.searchResult.items.map(book => (
          <SearchResultItem
            book={book}
            key={book.id}
            save={props.save}
          />
        ))}
      </div>) : (<div></div>)
      }
    </div>

  )
  // return (
  //   <div></div>
  // )
}

export default SearchResultArea;