import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SearchResultArea from "./components/SearchResultArea";
import ErrorPage from "./components/ErrorPage";
import SaveResultArea from "./components/SaveResultArea"

import './App.css';
import API from "./utils/API"

class App extends Component {
  state = {
    searchTerm: "title",
    title: "",
    author: "",
    searchResult: {},
    searched: false,
    saved: [],
    bookIDs: [],
  }

  componentDidMount() {
    this.getSavedBooks()
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => {
        console.log(res.data);
        const bookIDs = res.data.map(book => book.bookID)
        return this.setState({ saved: res.data , bookIDs: bookIDs})
      })
      .catch(err => console.log(err));
  }

  changeSearchTerm = (e) => {
    e.preventDefault();
    const type = e.target.value;
    this.setState({ searchTerm: type, title: "", author: "" });
  }

  handleInputChange = (e) => {

    const lookUp = e.target.value;
    if (this.state.searchTerm === "title") {
      return this.setState({ title: lookUp })
    }
    return this.setState({ author: lookUp });
  }

  search = (e) => {
    e.preventDefault();
    if (this.state.searchTerm === "title") {
      API.searchTitle(this.state.title)
        .then(res => {
          console.log(res.data)
          const bookIDs = res.data.items.map(book => book.id);
          console.log(bookIDs);
          this.setState({ searchResult: res.data, searched: true })
        })
        .catch(err => console.log(err));
    } else {
      API.searchAuthor(this.state.author)
        .then(res => {
          console.log(res.data);
          this.setState({ searchResult: res.data, searched: true })
        })
        .catch(err => console.log(err));
    }
  }

  save = (e) => {
    e.preventDefault();
    const {title, author, description, img, bookid} = e.target.dataset;
    // console.log(title, author, description, img)
    API.saveBook(title, author, description, img, bookid)
      .then(res => {
        console.log(res);
        this.getSavedBooks()
      })
      .catch(err => console.log(err));
  }

  changeRead = (e) => {
    e.preventDefault();
    const {read, id} = e.target.dataset;
    console.log(read, !read, id)
    console.log(typeof read)
    const newRead = read ==="true"? false: true;
    API.changeRead(id, newRead)
      .then(res => {
        console.log(res);
        this.getSavedBooks();

      })
      .catch(err => console.log(err))
  }

  deleteBook = (e) => {
    e.preventDefault();
    const id = e.target.dataset.id;
    API.deleteBook(id)
      .then(res => {
        console.log(res);
        this.getSavedBooks()
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>

        <Header />
        <Switch>
          <Route exact path="/" render={props => (
            <div className="container">
              <SearchBar
                changeSearchTerm={this.changeSearchTerm}
                title={this.state.title}
                author={this.state.author}
                handleInputChange={this.handleInputChange}
                searchTerm={this.state.searchTerm}
                search={this.search}
              />
              <SearchResultArea
                searchResult={this.state.searchResult}
                searched={this.state.searched}
                save={this.save}
                bookIDs={this.state.bookIDs}
              />
            </div>
          )} />
          <Route exact path="/saved" render={props => (
            <div className="container">
              <SaveResultArea 
                saved={this.state.saved}
                getSavedBooks={this.getSavedBooks}
                changeRead={this.changeRead}
                deleteBook={this.deleteBook}
              />
            </div>
          )} />

          <Route component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
