import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API"

class App extends Component {
  state = {
    searchTerm: "title",
    title: "",
    author: "",
    searchResult: {}
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
          this.setState({searchResult: res.data})
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
                
            </div>
          )} />
        </Switch>
      </Router>
    );
  }
}

export default App;
