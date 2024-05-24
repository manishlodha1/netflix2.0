import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies,searchMovie=false}) => {
    // const title = props.title;
    // const movies = props.movies;
  return (
    <div className='px-8'>
        <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl py-3 `}>{title}</h1>
        <div className=' flex overflow-x-auto cursor-pointer '>
            <div className='flex item-center '>
            {
                movies?.map((movie)=>{
                    return (
                        <MovieCard key={movie.id} posterPath = {movie.poster_path} />
                    )
                })
            }
                
                

            </div>
        </div>
    </div>
  )
}

export default MovieList