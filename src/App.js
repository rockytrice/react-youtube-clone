import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Components/Search_bar"
import YTSearch from "youtube-api-search"
// api key 
const API_KEY= `${process.env.REACT_APP_API_KEY}`



class App extends Component {
  constructor(props){
    super(props);
    this.state={videos:[]};
    YTSearch({key:API_KEY, term:"surfboards"}, function(data) {
      console.log(data);
    });
  }
  render() {
    return (
      <div>
      <SearchBar />
      </div>
    );
  }
}

export default App;
