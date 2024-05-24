import axios from 'axios'
import React from 'react'
import { Top_rated_Movie, options } from '../utils/constant'
import {getTopRatedMovie } from '../redux/movieSlice'
import { useDispatch } from 'react-redux'

const useTopRatedMovies = async () => {
    const dispatch = useDispatch();
   try{
        const res = await axios.get(Top_rated_Movie,options);
        dispatch(getTopRatedMovie(res.data.results));
   }
   catch(error){
        console.log(error);
   }
}

export default useTopRatedMovies;