import React,{Component} from "react"


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state ={
            term: ''
        };
    }
    render() {
        return (
            // create input element and pass as a prop on change with a value of this.handleInputChange
            <div className="search-bar">
            <input 
            value={this.state.term}
            onChange={event=> 
            // set the state with the new value of term and pushes all the update info to the dom
            this.onInputChange(event.target.value)}
             />
             </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
};






export default SearchBar;