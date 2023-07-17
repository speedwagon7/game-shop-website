import PropTypes from "prop-types";
import React, { Component } from "react";
import axios from "axios";
import GameForDisplayAll from "../DisplayAllGames/GameForDisplayAll";

class GamesForDisplayAll extends Component {
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
            <div className="row row-cols-4 row-cols-md-8 g-8 ">
                {
                    games.map(game => <GameForDisplayAll
                        key={game.id}
                        game={game} 
                         />)
                }
            </div>
        )
    }
}
export default GamesForDisplayAll