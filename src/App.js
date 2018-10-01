import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Components/Search_bar"

// api key 
const API_KEY= `${process.env.REACT_APP_API_KEY}`

class App extends Component {
  render() {
    return (
      <div>
      <SearchBar />
      </div>
    );
  }
}

export default App;
