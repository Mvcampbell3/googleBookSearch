import React, { Component } from "react";
import "./style.css";

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
              <h2 key={book._id}>{book.title}</h2>
            ))}
          </div>) :
          (<div>
            <h2>Please Add some Books to your Saved Collection!</h2>
          </div>)
        }

      </div>

    )
  }

}

export default SaveResultArea;