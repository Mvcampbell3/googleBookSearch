import React from "react";
import "./style.css";

const SearchResultItem = (props) => {
  const { title, authors, description } = props.book.volumeInfo
  const realAuthors = authors ? authors.toString().split(",").join(", ") : "Not Listed";
  return (
    <div className="searchResult">
      <div className="titleArea">
        <h2 className="bookTitle">{title}</h2>
        <h3 className="bookAuthor">By: {realAuthors}</h3>
      </div>

      <div className="resultFlex">
        <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={title}></img>
        <div>
          <h3 className="desTitle">Description</h3>
          <p className="description">{description}</p>

        </div>
      </div>
      {props.bookIDs.indexOf(props.book.id) < 0 ? (
        <button
        data-title={title}
        data-author={realAuthors}
        data-description={description}
        data-img={props.book.volumeInfo.imageLinks.thumbnail}
        data-bookid ={props.book.id}
        className="saveBtn"
        onClick={(e) => {
          props.save(e)
        }}
      >{props.bookIDs.indexOf(props.book.id) < 0 ? "Save":"Already Saved"}</button>
      ):(
        <button className="saveBtn">Already Saved</button>
      )}
    </div>
  )
}

export default SearchResultItem;