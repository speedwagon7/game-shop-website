import PropTypes from "prop-types";
import React, { Component } from "react";
import axios from "axios";
import Game from "./GamePageOrganisms/Game";

class Games extends Component {
    state = {
        games: []
    }

    componentDidMount(){
        axios.get("http://localhost:8088/api/v1/games").then(res => {
            const games = res.data
            this.setState({ games: games})
        })
    }
    
    
    render() {
        const { games } = this.state
        return (
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {
                    games.map(game => <Game
                        key={game.id}
                        game={game} 
                         />)
                }
            </div>
        )
    }
}
export default Games