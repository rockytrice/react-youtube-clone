import React, { Component } from 'react';
import './App.css';
import SearchBar from "./Components/Search_bar"
import YTSearch from "youtube-api-search"
import VideoList from "./Components/Video_list"
import VideoDetail from "./Components/Video_detail";
import _ from "lodash";
import Navbar from "./Components/Navbar"



// api key 
const API_KEY= `${process.env.REACT_APP_API_KEY}`



class App extends Component {
  constructor(props){
    super(props);

    this.state={
      videos:[],
      selectedVideo:null
    };

    this.videoSearch("React js");
  }

  videoSearch(term){
    YTSearch({key:API_KEY, term:term}, (videos) => {
      // update the value of videos..this.setState({videos:videos})
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }

  render() {
    // created a function and passed it to dbounce(which takes this inner function and returns a new function that can only be called 600 milliseconds)
    const videoSearch=_.debounce((term) => {this.videoSearch(term) },600);

    return (
      <div>
      <Navbar>
        <form className="form-inline">
       
        </form>
      </Navbar>
      <SearchBar onSearchTermChange={videoSearch} />

      <div className="row">
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
      // defined a fuction that takes a video and defines it on app's state(updates app's state with a new video)
      onVideoSelect ={selectedVideo => this.setState({selectedVideo}) }
       videos={this.state.videos} />
       </div>
      </div>
    );
  }
}

export default App;


/* <SearchBar onSearchTermChange={videoSearch} />  */
