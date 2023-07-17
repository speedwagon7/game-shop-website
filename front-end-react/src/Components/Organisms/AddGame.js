import axios from "axios"
import React, { Component } from 'react'


class AddGame extends Component {
    state = {
        name: "",
        genre: "",
        platform: "",
        price: "",
        ageRating: "",
        rating: "",
        description: "",
        imgstring: "",
        errors: {}
    }

    handleOnChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        
        const { name, genre, platform, price, ageRating, rating, description,imgstring } = this.state

        if (name === "") {
            this.setState({ errors: { name: "Name is required." } })
            return;
        }

        if (genre === "") {
            this.setState({ errors: { genre: "Genre is required." } })
            return;
        }
        if (platform === ""){
            this.setState({ errors: { platform: "Platform is required."}})
            return;
        }
        if (price === "") {
            this.setState({ errors: { price: "Price is required." } })
            return;
        }

        if (ageRating === "") {
            this.setState({ errors: { ageRating: "Age rating is required." } })
            return;
        }

        if (rating === "") {
            this.setState({ errors: { rating: "Rating is required." } })
            return;
        }

        if (description === "") {
            this.setState({ errors: { description: "Description is required." } })
            return;
        }

        if (imgstring === "") {
            this.setState({ errors: { imgstring: "Image path is required." } })
            return;
        }

       

        const newGame = {

            "name": name,
            "genre": genre,
            "platform": platform,
            "price": price,
            "ageRating": ageRating,
            "rating": rating,
            "description": description,
            "imgstring": imgstring
           
        }

        axios.post("http://localhost:8088/api/v1/games", newGame)

        this.setState({ name: "", genre: "", platform: "", price: "" , ageRating: "", rating: "" , description: "", imgstring: ""  })
    }

  

   
    render() {
        const { name, genre, platform,  price, ageRating, rating, description, imgstring, errors} = this.state

        
        return (
            <div className='card mb-1'>
            <div className="card-header bg-success text-white text-center">Add a new game</div>
            <div className="card-body">
                <form onSubmit={this.handleOnSubmit}>
                    
                <div className="mb-3">
                            <label className="form-label" htmlFor="name" > Game Name:</label> 
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                className="form-control"
                                placeholder="Insert game name..."
                                onChange={this.handleOnChange}
                                error={errors.name} />
                </div>

                <div className="mb-3">
                            <label className="form-label" htmlFor="genre" > Genre:</label> 
                            <input
                                type="text"
                                name="genre"
                                value={genre}
                                id="genre"
                                className="form-control"
                                placeholder="Insert game genre..."
                                onChange={this.handleOnChange}
                                error={errors.genre} />
                </div>
                <div className="mb-3">
                            <label className="form-label" htmlFor="platform" > Platform:</label> 
                            <input
                                type="text"
                                name="platform"
                                value={platform}
                                id="platform"
                                className="form-control"
                                placeholder="Insert game platform..."
                                onChange={this.handleOnChange}
                                error={errors.platform} />
                </div>
                <div className="mb-3">
                            <label className="form-label" htmlFor="price" > Price:</label> 
                            <input
                                type="number"
                                name="price"
                                value={price}
                                id="price"
                                className="form-control"
                                placeholder="Insert game price..."
                                onChange={this.handleOnChange}
                                error={errors.price} />
                </div>

                <div className="mb-3">
                            <label className="form-label" htmlFor="ageRating" > Age Rating:</label> 
                            <input
                                type="number"
                                name="ageRating"
                                value={ageRating}
                                id="ageRating"
                                className="form-control"
                                placeholder="Insert game age rating..."
                                onChange={this.handleOnChange}
                                error={errors.ageRating} />
                </div>

                <div className="mb-3">
                            <label className="form-label" htmlFor="rating" > Rating:</label> 
                            <input
                                type="number"
                                name="rating"
                                value={rating}
                                id="rating"
                                className="form-control"
                                placeholder="Insert game rating..."
                                onChange={this.handleOnChange}
                                error={errors.rating} />
                </div>

                <div className="mb-3">
                            <label className="form-label" htmlFor="description" > Description:</label> 
                            <input
                                type="text"
                                name="description"
                                value={description}
                                id="description"
                                className="form-control"
                                placeholder="Insert game description..."
                                onChange={this.handleOnChange}
                                error={errors.description} />
                </div>

                <div className="mb-3">
                            <label className="form-label" htmlFor="imgstring" > Image path:</label> 
                            <input
                                type="text"
                                name="imgstring"
                                value={imgstring}
                                id="imgstring"
                                className="form-control"
                                placeholder="Insert image path..."
                                onChange={this.handleOnChange}
                                error={errors.imgstring} />
                </div>
                
                <input
                            type='submit'
                            value="Add Game"
                            className='btn btn-outline-success float-end'
                        />
                </form>
               
                </div>
            </div>
            
        )
    }
}
    export default AddGame