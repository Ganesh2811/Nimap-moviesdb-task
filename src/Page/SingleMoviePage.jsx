import React, { useEffect, useState } from 'react'
import MovieDetails from '../Component/MovieDetails/MovieDetails'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const SingleMoviePage = ({title}) => {
  const [Data,setData] = useState();
  const [castDetails,setCastDetails] = useState();
  const { id } = useParams();
  useEffect(()=>{
    const fetchMovieDetails = async () => {
      try {

        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7c3a81d6064be40aa24f2316aef84e71&language=en-US`);
        setData(response.data);

        const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=7c3a81d6064be40aa24f2316aef84e71&language=en-US`);
        setCastDetails(castResponse.data.cast);

      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();

  },[id])
  return (
    <>
      <div className="boxContainer">
        <div className="container">
          <MovieDetails title={title} data={Data} cast={castDetails} />
        </div>
      </div>
    </>
  )
}

export default SingleMoviePage