import React from "react";
import "./style.css";

const SaveResultItem = (props) => {
  const { title, author, description, img_url, read, _id, link } = props.book
  return (
    <div className="saveResult">
      <div className="titleArea">
        <h2 className="bookTitle">{title}</h2>
        <h3 className="bookAuthor">By: {author}</h3>
        <h3 className="bookAuthor">Read: {read ? "Yes" : "Not Yet"}</h3>
      </div>

      <div className="resultFlex">
        <img src={img_url} alt={title}></img>
        <div>
          <h3 className="desTitle">Description</h3>
          <p className="description">{description}</p>
          <a className="link-off" href={link} target="_blank" rel="noopener noreferrer">More Information</a>
        </div>
      </div>

      <div className="saveBtnArea">
        <button onClick={props.changeRead} data-read={read} data-id={_id} className="saveBtn inline">{read ? "Make as Unread" : "Make as Read"}</button>
        <button data-id={_id} onClick={props.deleteBook} className="saveBtn inline">Delete</button>
      </div>

    </div>
  )
}

export default SaveResultItem;