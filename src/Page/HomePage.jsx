import React, { useEffect, useState } from 'react';
import Card from '../Component/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies,fetchSearchResults  } from '../Redux/moviesSlice';
import Pagination from '../Component/Pagination/Pagination';

const HomePage = ({title,category}) => {
  const dispatch = useDispatch();
  const [isSearching, setIsSearching] = useState(false);
  const searchQuery = useSelector((state) => state.movies.searchQuery);
  const searchResults = useSelector((state) => state.movies.searchResults);
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
  useEffect(() => {
    if (searchQuery) {
      setIsSearching(true);
      dispatch(fetchSearchResults(searchQuery));
    } else {
      setIsSearching(false);
      if (category === 'popular') {
        dispatch(fetchPopularMovies());
      } else if (category === 'top-rated') {
        dispatch(fetchTopRatedMovies());
      } else if (category === 'upcoming') {
        dispatch(fetchUpcomingMovies());
      }
    }
  }, [category, searchQuery, dispatch]);
  const dataToDisplay  = isSearching ? searchResults : movies;
  
  return (
    <>
      <div className="boxContainer">
        <div className="container">
          <Card title={title} data={dataToDisplay}/>
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default HomePage