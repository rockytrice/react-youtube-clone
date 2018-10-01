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
            <div>
            <input 
            value={this.state.term}
            onChange={event=> 
            // set the state with the new value of term and pushes all the update info to the dom
            this.setState(
                {term:event.target.value})}
             />
             </div>
        );
    }
    
};






export default SearchBar;