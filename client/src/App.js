import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SearchResultArea from "./components/SearchResultArea";



import './App.css';
import API from "./utils/API"

class App extends Component {
  state = {
    searchTerm: "title",
    title: "",
    author: "",
    searchResult: {},
    searched: false
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
    if (this.state.searchTerm === "title"){
      API.searchTitle(this.state.title)
        .then(res => {
          console.log(res.data)
          this.setState({searchResult: res.data, searched: true})
        })
        .catch(err => console.log(err));
    } else {
      API.searchAuthor(this.state.author)
        .then(res => {
          console.log(res.data);
          this.setState({searchResult: res.data, searched: true})
        })
        .catch(err => console.log(err));
    }
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
              />
            </div>
          )} />
        </Switch>
      </Router>
    );
  }
}

export default App;
