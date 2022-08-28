
import { buildQueries } from "@testing-library/dom";
import React, { useState } from "react";
import { Rating, RatingView } from 'react-simple-star-rating';
import '../styles/MovieCard.css';
import { data } from "../assets/data";


const MovieCard = () => {

    const [movie, setMovie] = useState( data)
        const [rating, setRating] = useState(0) // initial rating value

        // Catch Rating value
        const handleRating = (rate) => {
          setRating(rate)
          // Some logic
        }

    const [search, setSearch] = useState('')

    const [star, setStar] = useState(0) // initial rating value

  // Catch Rating value
  const handleStar= (value) => {
    setStar(value)
    // Some logic
  }

    const filteredMovies = movie.filter(
        a => {
            return a.title.toLowerCase().includes(search.toLocaleLowerCase())
        }
    )

    const filteredStar = movie.filter(
        a => {
            return a.rate ===star
        }
    )

    const [values, setValues] = useState
        (
            {
                title: '',
                description: '',
                posterURL: '',
                rate: 0

            }
        )

    const titleHandler = (e) => {
        setValues({ ...values, title: e.target.value })
    }

    const descriptionHandler = (e) => {
        setValues({ ...values, description: e.target.value })
    }
    const urlHandler = (e) => {
        setValues({ ...values, posterURL: e.target.value })
    }
    const submitHandler = e=>{
        e.preventDefault()
        addMovie(values.title,values.posterURL,values.description,values.rate)
    }
    
    
    const addMovie = (title,posterURL,description,rate) => {
        
            const newadd = [...movie,{title,description,posterURL,rate}]
            setMovie(newadd)
        
       
    }



    return (
        <>
            <div className="row d-flex justify-content-center align-items-center toto">
                <div className="col-md-6">   <Rating onClick={handleStar} ratingValue={star}/>
                    <div className="form">  <input type="text" onChange={e => setSearch(e.target.value)  } className="form-control form-input" placeholder="Search a movie..." /> <span className="left-pan"></span> </div>
                    
                </div>
                
            </div>

            <div className='container'>
                {
                    !star?
                    
                    filteredMovies.map((item,index) => {
                        
                        return (

                            <div className="movie-card" key={index}>
                                <div className="movie-header ">
                                    <img src={item.posterURL} alt='poster'/>
                                    <div className='overlay'>
                                        <div className="info-section">
                                            <label>Description</label>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie-content">
                                    <div className="movie-content-header">
                                        <a href="#">
                                            <h3 className="movie-title">{item.title}</h3>
                                        </a>

                                    </div>
                                    <div className="movie-info">


                                        <div className="info-section">
                                            <label style={{ color: 'black' }}>Rate</label>
                                            <Rating ratingValue={item.rate} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        )


                    }

                    ):
                    filteredStar.map((item,index) => {
                        return (

                            <div className="movie-card" key={index}>
                                <div className="movie-header ">
                                    <img src={item.posterURL} alt='poster'/>
                                    <div className='overlay'>
                                        <div className="info-section">
                                            <label>Description</label>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="movie-content">
                                    <div className="movie-content-header">
                                        <a href="#">
                                            <h3 className="movie-title">{item.title}</h3>
                                        </a>

                                    </div>
                                    <div className="movie-info">


                                        <div className="info-section">
                                            <label style={{ color: 'black' }}>Rate</label>
                                            <Rating ratingValue={item.rate} />
                                        </div>

                                    </div>
                                </div>
                            </div>

                        )


                    }

                    )
    
                }
            </div>
            <div className="containe"> <div className=" text-center mt-5 ">
                <h1 style={{color:'white'}}>Ajouter un film</h1>
            </div>
                <div className="row ">
                    <div className="col-lg-12 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="containe">
                                    <form role="form" onSubmit={submitHandler}>
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group"> <label htmlFor="form_name">
                                                        Title *
                                                    </label>
                                                        <input value={values.title} onChange={titleHandler}
                                                            type="text" className="form-control"
                                                            placeholder="Please enter your title *" required="required"
                                                            data-error="Title is required." />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_lastname">PostURL *</label>
                                                        <input value={values.posterURL} onChange={urlHandler}
                                                            type="text"
                                                            className="form-control" placeholder="Please enter your url *"
                                                            required="required" data-error="url is required." />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="form_message">Description *</label>
                                                        <textarea value={values.description} onChange={descriptionHandler}
                                                            className="form-control" placeholder="Write your description here."
                                                            rows="4" required="required"
                                                            data-error="Please, leave us a description.">
                                                        </textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <input type="submit" className="btn btn-success btn-send pt-2 btn-block "
                                                        value="Add movie" /> </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

MovieCard.defaultProps =
{
    postURL: '/defaulPoster.jpg',
    title: 'Default title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisc Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
}


export default MovieCard