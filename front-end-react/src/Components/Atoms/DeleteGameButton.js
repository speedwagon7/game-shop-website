import React, { Component } from "react";
import axios from "axios";

class DeleteGameButton extends Component{
    onHandleClick = () => {
        const { id } = this.props;
        console.log(id);
        axios.delete(`http://localhost:8088/api/v1/games/deleteById/${id}`)
        .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          });
    }

    render() {
        return (
               <button className="btn delete btn-success" onClick={this.onHandleClick}>
                Delete Game
               </button>
    )
    }
    
}
export default DeleteGameButton;