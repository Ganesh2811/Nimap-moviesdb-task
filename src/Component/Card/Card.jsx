import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
const Card = ({ title, data }) => {
  return (
    <>
      <h1 className='title'>{title}</h1>
      <div className="cardWrapper">
        {
          data &&  data.map((movie) => (
            <div className="itemWrapper" key={movie.id}>
            <div className="cardUpperSection">
              <Link to={`/MovieDetailsPage/${movie.id}`}>
                <img src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="movieImage" className='moiveImageName' />
              </Link>
            </div>
            <div className="cardLowerSection">
              <p className='movieTitle'>{movie.title}</p>
              <p className='movieRating'>Rating: {movie.vote_average}</p>
            </div>
          </div>    
      ))   
        }
    </div >
     
    </>
  )
}

export default Card