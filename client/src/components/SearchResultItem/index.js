import React from "react";
import "./style.css";

const SearchResultItem = (props) => {
  const { title, authors, description, infoLink } = props.book.volumeInfo
  const backup = "https://via.placeholder.com/128x231?text=Missing+Img+Url";
  const imgThumb = props.book.volumeInfo.imageLinks !== undefined ? props.book.volumeInfo.imageLinks.thumbnail : backup;
  const realAuthors = authors ? authors.join(", ") : "Not Listed";
  
  return (
    <div className="searchResult">
      <div className="titleArea">
        <h2 className="bookTitle">{title}</h2>
        <h3 className="bookAuthor">By: {realAuthors}</h3>
      </div>

      <div className="resultFlex">
        <img src={imgThumb} alt={title}></img>
        <div>
          <h3 className="desTitle">Description</h3>
          <p className="description">{description}</p>
          <a className="link-off" href={infoLink} target="_blank" rel="noopener noreferrer">More Information</a>
        </div>
      </div>
      {props.bookIDs.indexOf(props.book.id) < 0 ? (
        <button
        data-title={title}
        data-author={realAuthors}
        data-description={description}
        data-img={imgThumb}
        data-bookid ={props.book.id}
        data-link={infoLink}
        className="saveBtn"
        onClick={(e) => {
          props.save(e)
        }}
      >{props.bookIDs.indexOf(props.book.id) < 0 ? "Save":"Already Saved"}</button>
      ):(
        <button className="saveBtn wasSaved">Already Saved</button>
      )}
    </div>
  )
}

export default SearchResultItem;