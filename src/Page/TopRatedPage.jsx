import React, { useEffect } from 'react'
import Card from '../Component/Card/Card'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '../Redux/moviesSlice';
import Pagination from '../Component/Pagination/Pagination';

const TopRatedPage = ({title,category}) => {
  const dispatch = useDispatch();
  const movies = useSelector((state)=>{
    switch (category) {
      case 'popular':
        return state.movies.popularMovies;
      case 'top-rated':
        return state.movies.topRatedMovies;
      case 'upcoming':
        return state.movies.upcomingMovies;
      default:
        return [];
    }
  })
  useEffect(()=>{
    if (category === 'popular') {
      dispatch(fetchPopularMovies());
    } else if (category === 'top-rated') {
      dispatch(fetchTopRatedMovies());
    } else if (category === 'upcoming') {
      dispatch(fetchUpcomingMovies());
    }
  },[category, dispatch]);
  return (
    <>
      <div className="boxContainer">
        <div className="container">
          <Card title={title} data={movies} />
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default TopRatedPage