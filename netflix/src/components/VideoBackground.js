import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId,bool}) => {
 const trailerMovie = useSelector(store=>store.movie.trailerMovie);
  useMovieById(movieId);

  return (
    <div className='w-[vw] overflow-hidden'>
         <iframe 
         className={`${bool ? "w-[100%]" : "w-screen aspect-video" } `}
         src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=GJvEGa90E6oU3tiu&autoplay=1&mute=1`}
         title="YouTube video player" 
         frameBorder="0"  
         allowFullScreen>

         </iframe>
    </div>
  )
}

export default VideoBackground

// < width="560" height="315" src="https://www.youtube.com/embed/LXb3EKWsInQ?si=GJvEGa90E6oU3tiu"
//src={`https://www.youtube.com/embed/${trailerMovie?.Key}?si=F90rgU2zl3elVBu2&autoplay=1`}