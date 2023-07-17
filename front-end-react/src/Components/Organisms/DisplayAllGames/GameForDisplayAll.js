import React, { Component} from "react";
import PropTypes from 'prop-types'
import DisplayAllGamesCard from "./DisplayAllGamesCard";

class GameForDisplayAll extends Component{
    render() {
        const{id, name, genre, platform, price, ageRating, rating, description, imgstring} = this.props.game
        return (
            <DisplayAllGamesCard id={id} name={name} genre={genre} platform={platform} price={price} ageRating={ageRating} rating={rating} description={description} imgstring={imgstring}/>
        )
    }

    
}

GameForDisplayAll.defaultProps = {
    name: "Not Defined",
    genre: "Not Defined",
    platform: "NotDefined",
    price: "Not Defined",
    ageRating: "Not Defined",
    rating: "Not Defined",
    description: "Not Defined",
    imgstring: "Not Defined"
}

GameForDisplayAll.defaultProps = {
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ageRating: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgstring: PropTypes.string.isRequired
}

export default GameForDisplayAll
