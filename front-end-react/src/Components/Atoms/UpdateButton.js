import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class UpdateButton extends Component {
    
  render() {
    
    return (
        <Link to={`/Update`} >
        <button
          
          className="btn btn-success update-button"
          onClick={this.onHandleClick}
        >
          Update Game
        </button>
      </Link>
    );
  }
}

export default UpdateButton;
