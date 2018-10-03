import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Components/Search_bar"
import YTSearch from "youtube-api-search"
import VideoList from "./Components/Video_list"
// api key 
const API_KEY= `${process.env.REACT_APP_API_KEY}`



class App extends Component {
  constructor(props){
    super(props);
    this.state={videos:[]};
    YTSearch({key:API_KEY, term:"surfboards"}, (videos) => {
      // update the value of videos..this.setState({videos:videos})
      this.setState({videos});
    });
  }
  render() {
    return (
      <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
