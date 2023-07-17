import React, { Component} from "react";
import PropTypes from 'prop-types'
import GameCard from "./GameCard";


class Game extends Component{
    state = {
        inBasket: false
    }

    onHandleClick = () =>{
        this.setState({inBasket: !this.state.inBasket})
    }

    render() {
        const{imgstring, name, description, price,id} = this.props.game
        return (
            <GameCard imgSrc={imgstring} name={name} description={description} price={price} id={id}/>
        )
    }

    
}

Game.defaultProps = {
    imgstring: "Not Defined",
    name: "Not Defined",
    description: "Not Defined",
    price: "Not Defined"
}

Game.defaultProps = {
    imgstring: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
}

export default Game
