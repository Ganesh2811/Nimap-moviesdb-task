import React from 'react'
import "./MovieDetails.scss"
import CastCard from '../CastCard/CastCard';
const MovieDetails = ({title,cast,data}) => {
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const formattedDate = `${date.toLocaleDateString('en-US', { weekday: 'short' })} ${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
    
    return formattedDate;
  }
  return (
    <>
     {
       data && <div className="moviedescriptionContainer">
       <div className="leftSection">
         <div className="upperSection">
           <img src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} className='movieDescImage' alt="movieDetailsImage"/>
           <div className="movieDescData">
             <p className='movieTitle'>{data.original_title}</p>
             <p className='movierating'>Rating {data.vote_average}</p>
             <div className="movieTimeDetails">
               <p className='time'>{data.runtime + " mins"}</p>
                  <div className='genersActionWrapper'>
                    {
                      data.genres && data.genres.map((genre) => (
                          <span className='gernerActionText' key={genre.id}>{genre.name}</span>
                      ))
                    }
                  </div>
             </div>
             <p className='movieReleasingData'>Release Date: {formatDate(data.release_date)}</p>
           </div>
         </div>
         <div className="lowerSection">
           <h3>Overview</h3>
           <p className='overviewDescription'>{data.overview}</p>
         </div>
       </div>
       <div className="rightSection">
         <img src={"https://image.tmdb.org/t/p/w500/" + data.backdrop_path} alt="" className='movieDescImage' />
       </div>
     </div>
     }
      { cast && <CastCard title={title} cast={cast}/>}
    </>
  )
}

export default MovieDetails