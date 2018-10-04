import React,{Component} from "react";
import youtubeLogo from "../youtubeLogo.png"

class Navbar extends Component {
  render(){
    return(
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">
           <img src={youtubeLogo} width="70" height="50" alt="logo" className="d-inline-block align-top"/> ReactTube
           <form className="form-inline">

           </form>
        </a>
      </nav>
  
    )
  }

  
    
  
}

export default Navbar;