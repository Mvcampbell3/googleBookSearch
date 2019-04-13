import React from "react";
import "./style.css";

const SearchResultItem = (props) => {
  console.log(props)
  return (
    <div className="searchResult">
      <h3 className="bookTitle">{props.book.volumeInfo.title}</h3>
      <h3 className="bookAuthor">{props.book.volumeInfo.authors}</h3>
      <div className="resultFlex">
        <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title}></img>
        <p className="description">{props.book.volumeInfo.description}</p>
      </div>

    </div>
  )
}

export default SearchResultItem;