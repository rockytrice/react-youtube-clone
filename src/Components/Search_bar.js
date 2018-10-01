import React,{Component} from "react"


class SearchBar extends Component {

    render() {
        return (
            // create input element and pass as a prop on change with a value of this.handleInputChange
            <input onChange={event=> console.log(event.target.value)}
             />
        ) 
    }
    
};






export default SearchBar;