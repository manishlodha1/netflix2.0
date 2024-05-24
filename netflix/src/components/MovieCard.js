import React from 'react'
import { Banner_Url } from '../utils/constant'
import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/movieSlice';

const MovieCard = ({posterPath}) => {
  const dispatch = useDispatch();

  if (posterPath === null) return null;


  const handleOpen = () => {
    dispatch(setOpen(true));
  }

  return (
    <div className='w-48 pr-2' onClick={handleOpen}>
        <img src={`${Banner_Url}/${posterPath}`} alt="movie banner" />
    </div>
  )
}

export default MovieCard;