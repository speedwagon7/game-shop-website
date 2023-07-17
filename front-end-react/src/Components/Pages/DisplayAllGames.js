import React from "react";
import DeleteGameButton from "../Atoms/DeleteGameButton";
import GamesForDisplayAll from "../Organisms/DisplayAllGames/GamesForDisplayAll";
import { Component } from "react";
import { Link } from "react-router-dom";
import UpdateButton from "../Atoms/UpdateButton";
class DisplayAllGames extends Component {
  state = {
    password: "",
    isAuthorized: false, // initially, user is not authorized to see the form
    hasAttempted: false,
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handlePasswordSubmit = (e) => {
    e.preventDefault();
    const { password } = this.state;
    if (password === "mypassword") {
      // change this to your desired password
      this.setState({ isAuthorized: true });
    } else {
      this.setState({ hasAttempted: true }); // set the hasAttempted state to true if the password is incorrect
    }
  };
  render() {
    const { password, isAuthorized, hasAttempted } = this.state;
    if (!isAuthorized) {
      // if user is not authorized, render password form only
      return (
        <div className="form-container">
        <form className="pass-form"onSubmit={this.handlePasswordSubmit}>
          <label className="form-label pass-label" name="password">
            {" "}
            Enter password:{" "}
          </label>
          <input
            type="password"
            value={password}
            className="form-control pass-control"
            placeholder="Please insert password ..."
            onChange={this.handlePasswordChange}
          />
          <input
            type="submit"
            value="Enter"
            className="btn pass-btn btn-outline-success mt-2"
          />
          {hasAttempted && (
            <p className="error-message">Wrong password, please try again.</p>
          )}
        </form></div>
      );
    }
    return (
      <div>
        <GamesForDisplayAll>
          <DeleteGameButton />
        </GamesForDisplayAll>
        <div>
          <Link to="/Admin/Add-Game">
            <button className="btn btn-success">Add Game</button>
          </Link>
          <UpdateButton></UpdateButton>
        </div>
      </div>
    );
  }
}
export default DisplayAllGames;
