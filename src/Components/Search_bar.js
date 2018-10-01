import React,{Component} from "react"


class SearchBar extends Component {
    handleInputChange(event) {
        console.log(event.target.value);
    }

    render() {
        return (
            // create input element and pass as a prop on change with a value of this.handleInputChange
            <input onChange={this.handleInputChange} />
        ) 
    }
    
};






export default SearchBar;