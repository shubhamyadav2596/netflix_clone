import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import endPoints from '../services/movieServices'

const Home = () => {
  return (
   <>
     <Hero />
     <MovieRow title="Upcoming"  url={endPoints.upcoming}/>
     <MovieRow title="Trending" url={endPoints.trending}/>
     <MovieRow title="Top Rated" url={endPoints.topRated}/>
     <MovieRow title="Comedy" url={endPoints.comedy}/>
     <MovieRow title="Popular" url={endPoints.popular}/>
   </>
  )
}

export default Home;