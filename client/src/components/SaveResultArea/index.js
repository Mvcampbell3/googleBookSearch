import React, { Component } from "react";
import "./style.css";

import SaveResultItem from "../SaveResultItem";

class SaveResultArea extends Component {

  componentWillMount() {
    this.props.getSavedBooks();
  }

  render() {
    // console.log(this.props.saved)
    return (
      <div>
        {this.props.saved.length ?
          (<div className="SaveResultArea">
            {this.props.saved.map(book => (
              <SaveResultItem 
              key={book._id} 
              book={book}
              changeRead={this.props.changeRead}
              deleteBook={this.props.deleteBook}
              />
            ))}
          </div>) :
          (<div className="banner">
            <h2>Please Add some Books to your Saved Collection!</h2>
          </div>)
        }

      </div>

    )
  }

}

export default SaveResultArea;